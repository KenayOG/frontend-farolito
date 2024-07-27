import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDatosPerfilComponent } from './ver-datos-perfil.component';

describe('VerDatosPerfilComponent', () => {
  let component: VerDatosPerfilComponent;
  let fixture: ComponentFixture<VerDatosPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerDatosPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerDatosPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
