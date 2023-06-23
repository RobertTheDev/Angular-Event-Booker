import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Event from 'src/app/lib/types/Event';
import { format } from 'date-fns';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() event: Event | undefined;

  transform(date: Date): string {
    return format(date, 'EEE, MMM d, HH:mm');
  }

  faHeart = faHeart;
}
