import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesearcgComponent } from './moviesearcg.component';

describe('MoviesearcgComponent', () => {
  let component: MoviesearcgComponent;
  let fixture: ComponentFixture<MoviesearcgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesearcgComponent]
    });
    fixture = TestBed.createComponent(MoviesearcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
