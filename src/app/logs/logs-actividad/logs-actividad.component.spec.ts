import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsActividadComponent } from './logs-actividad.component';

describe('LogsActividadComponent', () => {
  let component: LogsActividadComponent;
  let fixture: ComponentFixture<LogsActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogsActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogsActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
