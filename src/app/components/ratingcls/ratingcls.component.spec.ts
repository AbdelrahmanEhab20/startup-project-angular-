import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingclsComponent } from './ratingcls.component';

describe('RatingclsComponent', () => {
  let component: RatingclsComponent;
  let fixture: ComponentFixture<RatingclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingclsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
