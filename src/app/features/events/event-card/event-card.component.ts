import { Component, Input } from '@angular/core';
import Event from 'src/app/interfaces/Event';
import { format } from 'date-fns';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event: Event | null = null;

  format = format;
}
