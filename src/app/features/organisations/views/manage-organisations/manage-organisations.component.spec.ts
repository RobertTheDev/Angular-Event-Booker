import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganisationsComponent } from './manage-organisations.component';

describe('ManageOrganisationsComponent', () => {
  let component: ManageOrganisationsComponent;
  let fixture: ComponentFixture<ManageOrganisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOrganisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOrganisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
