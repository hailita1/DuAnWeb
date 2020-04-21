import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailRatingComponent } from './show-detail-rating.component';

describe('ShowDetailRatingComponent', () => {
  let component: ShowDetailRatingComponent;
  let fixture: ComponentFixture<ShowDetailRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
