import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusPedidosComponent } from './estatus-pedidos.component';

describe('EstatusPedidosComponent', () => {
  let component: EstatusPedidosComponent;
  let fixture: ComponentFixture<EstatusPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstatusPedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatusPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
