import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionRecetasComponent } from './administracion-recetas.component';

describe('AdministracionRecetasComponent', () => {
  let component: AdministracionRecetasComponent;
  let fixture: ComponentFixture<AdministracionRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionRecetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
