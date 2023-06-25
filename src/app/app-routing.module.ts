// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EventsViewComponent } from '../../views/events/events-view/events-view.component';
// import { EventViewComponent } from '../../views/events/event-view/event-view.component';
// import { OrganiseEventViewComponent } from '../../views/events/organise-event-view/organise-event-view.component';
// import { EditEventViewComponent } from '../../views/events/edit-event-view/edit-event-view.component';
// import { NotFoundComponent } from '../../views/not-found/not-found.component';
// import { SavedEventsViewComponent } from '../../views/profile/views/saved-events-view/saved-events-view.component';
// import { EditProfileViewComponent } from '../../views/profile/views/edit-profile-view/edit-profile-view.component';
// import { AccountSettingsViewComponent } from '../../views/profile/views/account-settings-view/account-settings-view.component';
// import { ProfileViewComponent } from '../../views/profile/views/profile-view/profile-view.component';
// import { OrganisationViewComponent } from '../../views/organisations/organisation-view/organisation-view.component';
// import { OrganisationsViewComponent } from '../../views/organisations/organisations-view/organisations-view.component';
// import { AccessibilityStatementViewComponent } from '../../views/info/views/accessibility-statement-view/accessibility-statement-view.component';
// import { TermsViewComponent } from '../../views/info/views/terms-view/terms-view.component';
// import { PrivacyPolicyViewComponent } from '../../views/info/views/privacy-policy-view/privacy-policy-view.component';
// import { CookiePolicyViewComponent } from '../../views/info/views/cookie-policy-view/cookie-policy-view.component';
// import { AboutViewComponent } from '../../views/info/views/about-view/about-view.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: EventsViewComponent,
//   },
//   {
//     path: 'auth',
//     children: [
//       {
//         path: 'sign-up',
//         component: EventsViewComponent,
//       },
//       {
//         path: 'login',
//         component: EventsViewComponent,
//       },
//     ],
//   },
//   {
//     path: 'events',
//     children: [
//       {
//         path: '',
//         component: EventsViewComponent,
//       },
//       {
//         path: ':id',
//         component: EventViewComponent,
//       },
//       {
//         path: 'organise-event',
//         component: OrganiseEventViewComponent,
//       },
//       {
//         path: 'edit-event/:id',
//         component: EditEventViewComponent,
//       },
//     ],
//   },
//
//   {
//     path: 'organisations',
//     children: [
//       {
//         path: '',
//         component: OrganisationsViewComponent,
//       },
//       {
//         path: ':id',
//         component: OrganisationViewComponent,
//       },
//     ],
//   },
//   {
//     path: 'profile',
//     children: [
//       {
//         path: '',
//         component: ProfileViewComponent,
//       },
//       {
//         path: 'account-settings',
//         component: AccountSettingsViewComponent,
//       },
//       {
//         path: 'edit-profile',
//         component: EditProfileViewComponent,
//       },
//       {
//         path: 'saved-events',
//         component: SavedEventsViewComponent,
//       },
//     ],
//   },
//   { path: '**', component: NotFoundComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundRoutingModule } from './features/not-found/not-found.routing.module';
import { HomeRoutingModule } from './features/home/home.routing.module';
import { AuthRoutingModule } from './features/auth/auth.routing.module';
import { InfoRoutingModule } from './features/info/info.routing.module';
import { EventsRoutingModule } from './features/events/events.routing.module';
import { ProfileRoutingModule } from './features/profile/profile.routing.module';
import { AccountSettingsModule } from './features/account-settings/account-settings.module';
import { AccountSettingsRoutingModule } from './features/account-settings/account-settings.routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    EventsRoutingModule,
    HomeRoutingModule,
    InfoRoutingModule,
    ProfileRoutingModule,
    AccountSettingsRoutingModule,
    NotFoundRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
