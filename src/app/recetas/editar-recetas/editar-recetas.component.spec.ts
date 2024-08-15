import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRecetasComponent } from './editar-recetas.component';

describe('EditarRecetasComponent', () => {
  let component: EditarRecetasComponent;
  let fixture: ComponentFixture<EditarRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarRecetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
