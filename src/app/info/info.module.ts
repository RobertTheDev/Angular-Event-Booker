import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { PrivacyPolicyViewComponent } from './views/privacy-policy-view/privacy-policy-view.component';
import { TermsViewComponent } from './views/terms-view/terms-view.component';
import { AccessibilityStatementViewComponent } from './views/accessibility-statement-view/accessibility-statement-view.component';

@NgModule({
  declarations: [
    AboutViewComponent,
    PrivacyPolicyViewComponent,
    TermsViewComponent,
    AccessibilityStatementViewComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutViewComponent,
    PrivacyPolicyViewComponent,
    TermsViewComponent,
    AccessibilityStatementViewComponent,
  ],
})
export class InfoModule {}
