import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganisationCardComponent } from './manage-organisation-card.component';

describe('ManageOrganisationCardComponent', () => {
  let component: ManageOrganisationCardComponent;
  let fixture: ComponentFixture<ManageOrganisationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrganisationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOrganisationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
