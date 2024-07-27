import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPedidoClienteComponent } from './agregar-pedido-cliente.component';

describe('AgregarPedidoClienteComponent', () => {
  let component: AgregarPedidoClienteComponent;
  let fixture: ComponentFixture<AgregarPedidoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarPedidoClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarPedidoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
