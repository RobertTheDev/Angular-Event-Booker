import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/cards/event-card/event-card.component';
import { EventDetailComponent } from './components/details/event-detail/event-detail.component';
import { EventCardListComponent } from './components/lists/event-card-list/event-card-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { EventsViewComponent } from './views/events-view/events-view.component';
import { EventViewComponent } from './views/event-view/event-view.component';

@NgModule({
  declarations: [
    EventCardComponent,
    EventCardListComponent,
    EventDetailComponent,
    EventsViewComponent,
    EventViewComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [EventsViewComponent, EventViewComponent],
})
export class EventModule {}
