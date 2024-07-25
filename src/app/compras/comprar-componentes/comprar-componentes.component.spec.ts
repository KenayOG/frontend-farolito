import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarComponentesComponent } from './comprar-componentes.component';

describe('ComprarComponentesComponent', () => {
  let component: ComprarComponentesComponent;
  let fixture: ComponentFixture<ComprarComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprarComponentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
