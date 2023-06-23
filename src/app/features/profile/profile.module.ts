import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyOrganisationsComponent } from './my-organisations/my-organisations.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedEventsComponent } from './saved-events/saved-events.component';

@NgModule({
  declarations: [
    AccountSettingsComponent,
    EditProfileComponent,
    MyBookingsComponent,
    MyEventsComponent,
    MyOrganisationsComponent,
    ProfileComponent,
    SavedEventsComponent,
  ],
  imports: [CommonModule],
})
export class ProfileModule {}
