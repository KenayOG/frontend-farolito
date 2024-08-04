import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarProduccionComponent } from './generar-produccion.component';

describe('GenerarProduccionComponent', () => {
  let component: GenerarProduccionComponent;
  let fixture: ComponentFixture<GenerarProduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerarProduccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
