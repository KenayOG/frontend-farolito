import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionComprasComponent } from './administracion-compras.component';

describe('AdministracionComprasComponent', () => {
  let component: AdministracionComprasComponent;
  let fixture: ComponentFixture<AdministracionComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
