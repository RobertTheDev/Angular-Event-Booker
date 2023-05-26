import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../service/event.service';
import Event from 'src/app/lib/types/Event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.sass'],
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined = undefined;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.getEvent(id);
    });
  }

  getEvent(id: string | null) {
    if (id) {
      this.event = this.eventService.getEventById(id);
    }
  }
}
