import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventCardListComponent } from './event-card-list/event-card-list.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [EventCardListComponent, EventCardComponent, EventsComponent],
  imports: [CommonModule, RouterModule],
  exports: [EventCardComponent],
})
export class EventsModule {}
