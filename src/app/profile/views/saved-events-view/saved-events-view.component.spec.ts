import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedEventsViewComponent } from './saved-events-view.component';

describe('SavedEventsViewComponent', () => {
  let component: SavedEventsViewComponent;
  let fixture: ComponentFixture<SavedEventsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedEventsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
