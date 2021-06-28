import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNeedComponent } from './request-need.component';

describe('RequestNeedComponent', () => {
  let component: RequestNeedComponent;
  let fixture: ComponentFixture<RequestNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
