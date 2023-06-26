import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationsComponent } from './views/organisations/organisations.component';
import { OrganisationComponent } from './views/organisation/organisation.component';
import { EditOrganisationComponent } from './views/edit-organisation/edit-organisation.component';
import { CreateOrganisationComponent } from './views/create-organisation/create-organisation.component';
import { MyOrganisationsComponent } from './views/my-organisations/my-organisations.component';

const routes: Routes = [
  {
    path: 'organisations',
    children: [
      { path: '', component: OrganisationsComponent },
      { path: ':id', component: OrganisationComponent },
      { path: ':id/edit-organisation', component: EditOrganisationComponent },
      { path: 'create-organisation', component: CreateOrganisationComponent },
      { path: 'my-organisations', component: MyOrganisationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganisationsRoutingModule {}
