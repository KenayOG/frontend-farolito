import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMermaComponent } from './administracion-merma.component';

describe('AdministracionMermaComponent', () => {
  let component: AdministracionMermaComponent;
  let fixture: ComponentFixture<AdministracionMermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracionMermaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracionMermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
