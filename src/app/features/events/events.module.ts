import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventCardListComponent } from './event-card-list/event-card-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events/events.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventCardListComponent,
    EventCardComponent,
    EventsComponent,
    CreateEventComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [EventCardComponent],
})
export class EventsModule {}
