import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLoteComponentesComponent } from './agregar-lote-componentes.component';

describe('AgregarLoteComponentesComponent', () => {
  let component: AgregarLoteComponentesComponent;
  let fixture: ComponentFixture<AgregarLoteComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarLoteComponentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarLoteComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
