import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLamparaComponent } from './detalle-lampara.component';

describe('DetalleLamparaComponent', () => {
  let component: DetalleLamparaComponent;
  let fixture: ComponentFixture<DetalleLamparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleLamparaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleLamparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
