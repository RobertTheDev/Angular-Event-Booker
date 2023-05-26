import { Component } from '@angular/core';
import { EventService } from '../../../service/event.service';
import Event from 'src/app/lib/types/Event';

@Component({
  selector: 'app-event-card-list',
  templateUrl: './event-card-list.component.html',
  styleUrls: ['./event-card-list.component.sass'],
})
export class EventCardListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.events = this.eventService.getEvents();
  }
}
