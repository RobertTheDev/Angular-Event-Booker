import { Injectable } from '@angular/core';
import eventsData from 'src/lib/data/events';
import Event from 'src/lib/types/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private events: Event[] = eventsData;

  constructor() {}

  getEvents() {
    return this.events;
  }

  getEventById(id: string) {
    return this.events.find((event) => event.id === id);
  }
}
