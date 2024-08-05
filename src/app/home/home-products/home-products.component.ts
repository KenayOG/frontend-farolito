import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { LampInventory } from '../../interfaces/lamp-inventory';
import { InventarioService } from '../../services/inventario.service';
import { RecetasService } from '../../services/recetas.service';
import { Recipe } from '../../interfaces/recipe';
import { ComponenteRecipe } from '../../interfaces/component-recipe';
import { Cart, CartRequest } from '../../interfaces/cart';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css'],
})
export class HomeProductsComponent {
  @ViewChildren('cartButton') cartbuttons!: QueryList<ElementRef>;
  products: LampInventory[] = [];
  recipes: Recipe[] = [];
  cartProducts: Cart[] = [];
  cargando: boolean = true;
  baseUrl: string = 'https://localhost:5000';
  cantidadSeleccionada: { [key: number]: number } = {}; // Propiedad para almacenar la cantidad seleccionada

  constructor(
    config: NgbPopoverConfig,
    private elementRef: ElementRef,
    private productosService: InventarioService,
    private recetasService: RecetasService,
    private carritoService: CarritoService
  ) {
    this.obtenerProductos();
    this.obtenerRecetas();
    this.obtenerCarrito();
    config.placement = 'end';
    config.triggers = 'hover';

    config.popperOptions = (options) => {
      for (const modifier of options.modifiers || []) {
        if (modifier.name === 'offset' && modifier.options) {
          modifier.options['offset'] = () => [30, 8];
        }
      }
      return options;
    };
  }

  obtenerProductos() {
    this.cargando = true;
    this.productosService.getInventarioLampara().subscribe({
      next: (data) => {
        this.products = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  obtenerRecetas() {
    this.cargando = true;
    this.recetasService.getRecetas().subscribe({
      next: (data) => {
        this.recipes = data;
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
      error: (e) => {
        console.log(e);
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      },
    });
  }

  obtenerCarrito() {
    this.carritoService.getCarrito().subscribe({
      next: (data) => {
        this.cartProducts = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  addToCart(productId: number) {
    const cantidad = this.cantidadSeleccionada[productId];

    if (cantidad <= 0 || !cantidad) {
      alert('Por favor, ingrese una cantidad válida.');
      return;
    }

    const cartRequest: CartRequest = {
      recetaId: productId,
      cantidad: cantidad
    };

    this.carritoService.addCarrito([cartRequest]).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.obtenerCarrito();
      },
      error: (e) => {
        console.log('Error al agregar producto al carrito:', e);
      }
    });
  }

  getComponentesProductos(productId: number): ComponenteRecipe[] {
    const recipe = this.recipes.find((r) => r.id === productId);
    return recipe ? recipe.componentes : [];
  }

  getImagenProducto(imagePath: string): string {
    return `${this.baseUrl}${imagePath}`;
  }
}
