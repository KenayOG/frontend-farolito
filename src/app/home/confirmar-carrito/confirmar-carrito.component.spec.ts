import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCarritoComponent } from './confirmar-carrito.component';

describe('ConfirmarCarritoComponent', () => {
  let component: ConfirmarCarritoComponent;
  let fixture: ComponentFixture<ConfirmarCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmarCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
