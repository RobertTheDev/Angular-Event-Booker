import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationsViewComponent } from './views/organisations-view/organisations-view.component';
import { OrganisationViewComponent } from './views/organisation-view/organisation-view.component';

@NgModule({
  declarations: [OrganisationsViewComponent, OrganisationViewComponent],
  imports: [CommonModule],
})
export class OrganisationModule {}
