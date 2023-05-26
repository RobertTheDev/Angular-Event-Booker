import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventViewComponent } from './edit-event-view.component';

describe('EditEventViewComponent', () => {
  let component: EditEventViewComponent;
  let fixture: ComponentFixture<EditEventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEventViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
