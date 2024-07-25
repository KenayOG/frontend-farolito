import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosProduccionComponent } from './pedidos-produccion.component';

describe('PedidosProduccionComponent', () => {
  let component: PedidosProduccionComponent;
  let fixture: ComponentFixture<PedidosProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosProduccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidosProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
