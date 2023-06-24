import { Component, Input } from '@angular/core';
import Event from 'src/app/interfaces/Event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.sass'],
})
export class EventCardComponent {
  @Input() event: Event | null = null;
}
