import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticUserComponent } from './statistic-user.component';

describe('StatisticUserComponent', () => {
  let component: StatisticUserComponent;
  let fixture: ComponentFixture<StatisticUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
