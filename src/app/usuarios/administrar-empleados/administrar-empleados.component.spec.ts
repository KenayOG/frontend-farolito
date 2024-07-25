import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEmpleadosComponent } from './administrar-empleados.component';

describe('AdministrarEmpleadosComponent', () => {
  let component: AdministrarEmpleadosComponent;
  let fixture: ComponentFixture<AdministrarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
