import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'info',
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      //   {
      //     path: 'cookie-policy',
      //     component: CookiePolicyViewComponent,
      //   },
      //   {
      //     path: 'privacy-policy',
      //     component: PrivacyPolicyViewComponent,
      //   },
      //   {
      //     path: 'terms-and-conditions',
      //     component: TermsViewComponent,
      //   },
      //   {
      //     path: 'accessibility-statement',
      //     component: AccessibilityStatementViewComponent,
      //   },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
