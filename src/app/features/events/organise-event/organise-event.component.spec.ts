import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiseEventComponent } from './organise-event.component';

describe('CreateEventComponent', () => {
  let component: OrganiseEventComponent;
  let fixture: ComponentFixture<OrganiseEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganiseEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganiseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
