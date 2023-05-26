import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCardListComponent } from './event/components/lists/event-card-list/event-card-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpViewComponent } from './auth/views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './auth/views/login-view/login-view.component';
import { EventViewComponent } from './event/views/event-view/event-view.component';
import { EventsViewComponent } from './event/views/events-view/events-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventCardListComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-up',
        component: SignUpViewComponent,
      },
      {
        path: 'login',
        component: LoginViewComponent,
      },
    ],
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        component: EventsViewComponent,
      },
      {
        path: '/:id',
        component: EventViewComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
