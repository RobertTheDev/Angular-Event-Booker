import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrganisationCardComponent } from './select-organisation-card.component';

describe('SelectOrganisationCardComponent', () => {
  let component: SelectOrganisationCardComponent;
  let fixture: ComponentFixture<SelectOrganisationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrganisationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOrganisationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
