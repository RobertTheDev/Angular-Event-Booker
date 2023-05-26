import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsViewComponent } from './organisations-view.component';

describe('OrganisationsViewComponent', () => {
  let component: OrganisationsViewComponent;
  let fixture: ComponentFixture<OrganisationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
