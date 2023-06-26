import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrganisationComponent } from './views/create-organisation/create-organisation.component';
import { EditOrganisationComponent } from './views/edit-organisation/edit-organisation.component';
import { OrganisationComponent } from './views/organisation/organisation.component';
import { OrganisationsComponent } from './views/organisations/organisations.component';
import { MyOrganisationsComponent } from './views/my-organisations/my-organisations.component';
import { SelectOrganisationCardComponent } from './components/select-organisation-card/select-organisation-card.component';
import { ManageOrganisationCardComponent } from './components/manage-organisation-card/manage-organisation-card.component';
import { OrganisationCardComponent } from './components/organisation-card/organisation-card.component';
import { ManageOrganisationsComponent } from './views/manage-organisations/manage-organisations.component';

@NgModule({
  declarations: [
    CreateOrganisationComponent,
    EditOrganisationComponent,
    MyOrganisationsComponent,
    OrganisationComponent,
    OrganisationsComponent,
    SelectOrganisationCardComponent,
    ManageOrganisationCardComponent,
    OrganisationCardComponent,
    ManageOrganisationsComponent,
  ],
  imports: [CommonModule],
})
export class OrganisationsModule {}
