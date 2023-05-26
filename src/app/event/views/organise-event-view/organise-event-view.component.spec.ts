import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseEventViewComponent } from './organise-event-view.component';

describe('OrganiseEventViewComponent', () => {
  let component: OrganiseEventViewComponent;
  let fixture: ComponentFixture<OrganiseEventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiseEventViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganiseEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
