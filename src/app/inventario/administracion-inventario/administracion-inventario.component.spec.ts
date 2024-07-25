import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionInventarioComponent } from './administracion-inventario.component';

describe('AdministracionInventarioComponent', () => {
  let component: AdministracionInventarioComponent;
  let fixture: ComponentFixture<AdministracionInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionInventarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
