import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/cards/event-card/event-card.component';
import { EventDetailComponent } from './components/details/event-detail/event-detail.component';
import { EventCardListComponent } from './components/lists/event-card-list/event-card-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    EventCardComponent,
    EventCardListComponent,
    EventDetailComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [EventCardComponent, EventCardListComponent, EventDetailComponent],
})
export class EventModule {}
