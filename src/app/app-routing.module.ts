import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailComponent } from './event/components/details/event-detail/event-detail.component';
import { EventCardListComponent } from './event/components/lists/event-card-list/event-card-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: EventCardListComponent,
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
