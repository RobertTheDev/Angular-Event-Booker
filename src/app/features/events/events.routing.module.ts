import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { OrganiseEventComponent } from './organise-event/organise-event.component';

const routes: Routes = [
  {
    path: 'events',
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'organise-event',
        component: OrganiseEventComponent,
      },
      {
        path: ':id',
        component: EventComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
