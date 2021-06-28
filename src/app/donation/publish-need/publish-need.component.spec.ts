import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNeedComponent } from './publish-need.component';

describe('PublishNeedComponent', () => {
  let component: PublishNeedComponent;
  let fixture: ComponentFixture<PublishNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishNeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
