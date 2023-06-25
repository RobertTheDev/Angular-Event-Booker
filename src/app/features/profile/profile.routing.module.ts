import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyOrganisationsComponent } from './my-organisations/my-organisations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LikesComponent } from './likes/likes.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';

const routes: Routes = [
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileComponent },
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
