import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';
import { AccountSettingsViewComponent } from './views/account-settings-view/account-settings-view.component';
import { EditProfileViewComponent } from './views/edit-profile-view/edit-profile-view.component';
import { SavedEventsViewComponent } from './views/saved-events-view/saved-events-view.component';

@NgModule({
  declarations: [
    ProfileViewComponent,
    AccountSettingsViewComponent,
    EditProfileViewComponent,
    SavedEventsViewComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProfileViewComponent,
    AccountSettingsViewComponent,
    EditProfileViewComponent,
    SavedEventsViewComponent,
  ],
})
export class ProfileModule {}
