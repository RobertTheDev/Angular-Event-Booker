import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrganisationComponent } from './views/create-organisation/create-organisation.component';
import { EditOrganisationComponent } from './views/edit-organisation/edit-organisation.component';
import { OrganisationComponent } from './views/organisation/organisation.component';
import { OrganisationsComponent } from './views/organisations/organisations.component';
import { MyOrganisationsComponent } from './views/my-organisations/my-organisations.component';

@NgModule({
  declarations: [
    CreateOrganisationComponent,
    EditOrganisationComponent,
    MyOrganisationsComponent,
    OrganisationComponent,
    OrganisationsComponent,
  ],
  imports: [CommonModule],
})
export class OrganisationsModule {}
