import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollArrow } from './scroll-arrow';

describe('ScrollArrow', () => {
  let component: ScrollArrow;
  let fixture: ComponentFixture<ScrollArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollArrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollArrow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
