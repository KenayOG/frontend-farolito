import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasPorUsuarioComponent } from './compras-por-usuario.component';

describe('ComprasPorUsuarioComponent', () => {
  let component: ComprasPorUsuarioComponent;
  let fixture: ComponentFixture<ComprasPorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasPorUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprasPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
