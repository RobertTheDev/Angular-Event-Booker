import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCardComponent } from './event-card/event-card.component';



@NgModule({
  declarations: [
    EventDetailComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventModule { }
