import { Component } from '@angular/core';
import eventsData from 'src/app/data/events';
import { format } from 'date-fns';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
  event = eventsData.find(({ id }) => id === '1');

  formatDate = format;
}
