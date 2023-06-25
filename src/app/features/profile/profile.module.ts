import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyOrganisationsComponent } from './my-organisations/my-organisations.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LikesComponent } from './likes/likes.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';

@NgModule({
  declarations: [
    LikesComponent,
    MyBookingsComponent,
    MyEventsComponent,
    MyOrganisationsComponent,
    MyTicketsComponent,
    ProfileComponent,
    NotificationsComponent,
  ],
  imports: [CommonModule],
})
export class ProfileModule {}
