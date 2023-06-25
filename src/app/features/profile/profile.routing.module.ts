import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyOrganisationsComponent } from './my-organisations/my-organisations.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LikesComponent } from './likes/likes.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { FollowingComponent } from './following/following.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'following', component: FollowingComponent },
      { path: 'likes', component: LikesComponent },
      { path: 'my-bookings', component: MyBookingsComponent },
      { path: 'my-events', component: MyEventsComponent },
      { path: 'my-organisations', component: MyOrganisationsComponent },
      { path: 'my-tickets', component: MyTicketsComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
