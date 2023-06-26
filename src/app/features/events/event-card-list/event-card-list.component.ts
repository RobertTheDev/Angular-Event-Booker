import { Component } from '@angular/core';
import eventsData from 'src/app/data/events';

@Component({
  selector: 'app-event-card-list',
  templateUrl: './event-card-list.component.html',
})
export class EventCardListComponent {
  events = eventsData;
}
