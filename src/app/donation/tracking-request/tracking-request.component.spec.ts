import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingRequestComponent } from './tracking-request.component';

describe('TrackingRequestComponent', () => {
  let component: TrackingRequestComponent;
  let fixture: ComponentFixture<TrackingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
