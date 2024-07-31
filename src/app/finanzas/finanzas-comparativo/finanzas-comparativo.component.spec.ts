import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasComparativoComponent } from './finanzas-comparativo.component';

describe('FinanzasComparativoComponent', () => {
  let component: FinanzasComparativoComponent;
  let fixture: ComponentFixture<FinanzasComparativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinanzasComparativoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanzasComparativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
