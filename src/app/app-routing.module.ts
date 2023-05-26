import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpViewComponent } from './auth/views/sign-up-view/sign-up-view.component';
import { LoginViewComponent } from './auth/views/login-view/login-view.component';
import { EventViewComponent } from './event/views/event-view/event-view.component';
import { EventsViewComponent } from './event/views/events-view/events-view.component';
import { AboutViewComponent } from './info/views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './info/views/privacy-policy-view/privacy-policy-view.component';
import { TermsViewComponent } from './info/views/terms-view/terms-view.component';
import { AccessibilityStatementViewComponent } from './info/views/accessibility-statement-view/accessibility-statement-view.component';
import { OrganisationViewComponent } from './organisation/views/organisation-view/organisation-view.component';
import { OrganisationsViewComponent } from './organisation/views/organisations-view/organisations-view.component';
import { ProfileViewComponent } from './profile/views/profile-view/profile-view.component';
import { AccountSettingsViewComponent } from './profile/views/account-settings-view/account-settings-view.component';
import { EditProfileViewComponent } from './profile/views/edit-profile-view/edit-profile-view.component';
import { SavedEventsViewComponent } from './profile/views/saved-events-view/saved-events-view.component';
import { OrganiseEventViewComponent } from './event/views/organise-event-view/organise-event-view.component';
import { EditEventViewComponent } from './event/views/edit-event-view/edit-event-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventsViewComponent,
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
        path: ':id',
        component: EventViewComponent,
      },
      {
        path: 'organise-event',
        component: OrganiseEventViewComponent,
      },
      {
        path: 'edit-event/:id',
        component: EditEventViewComponent,
      },
    ],
  },
  {
    path: 'info',
    children: [
      {
        path: 'about',
        component: AboutViewComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyViewComponent,
      },
      {
        path: 'terms-and-conditions',
        component: TermsViewComponent,
      },
      {
        path: 'accessibility-statement',
        component: AccessibilityStatementViewComponent,
      },
    ],
  },
  {
    path: 'organisations',
    children: [
      {
        path: '',
        component: OrganisationsViewComponent,
      },
      {
        path: ':id',
        component: OrganisationViewComponent,
      },
    ],
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        component: ProfileViewComponent,
      },
      {
        path: 'account-settings',
        component: AccountSettingsViewComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileViewComponent,
      },
      {
        path: 'saved-events',
        component: SavedEventsViewComponent,
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
