import { Component } from '@angular/core';
import eventsData from 'src/app/data/events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  events = eventsData;
}
