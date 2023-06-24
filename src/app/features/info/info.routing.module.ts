import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AccessibilityStatementComponent } from './accessibility-statement/accessibility-statement.component';

const routes: Routes = [
  {
    path: 'info',
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'cookie-policy',
        component: CookiePolicyComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
      },
      {
        path: 'accessibility-statement',
        component: AccessibilityStatementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
