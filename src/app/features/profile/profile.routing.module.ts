import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyOrganisationsComponent } from './my-organisations/my-organisations.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'my-bookings', component: MyBookingsComponent },
      { path: 'my-events', component: MyEventsComponent },
      { path: 'my-organisations', component: MyOrganisationsComponent },
      { path: 'saved-events', component: SavedEventsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
