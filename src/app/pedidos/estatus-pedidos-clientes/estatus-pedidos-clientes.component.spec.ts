import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusPedidosClientesComponent } from './estatus-pedidos-clientes.component';

describe('EstatusPedidosClientesComponent', () => {
  let component: EstatusPedidosClientesComponent;
  let fixture: ComponentFixture<EstatusPedidosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstatusPedidosClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatusPedidosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
