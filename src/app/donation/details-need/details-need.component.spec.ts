import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsNeedComponent } from './details-need.component';

describe('DetailsNeedComponent', () => {
  let component: DetailsNeedComponent;
  let fixture: ComponentFixture<DetailsNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsNeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
