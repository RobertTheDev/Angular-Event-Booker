import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountInfoComponent } from './views/account-info/account-info.component';
import { LinkedAccountsComponent } from './views/linked-accounts/linked-accounts.component';
import { CloseAccountComponent } from './views/close-account/close-account.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { ChangeEmailComponent } from './views/change-email/change-email.component';
import { AddPaymentCardComponent } from './views/add-payment-card/add-payment-card.component';
import { VerifyAccountComponent } from './views/verify-account/verify-account.component';

const routes: Routes = [
  {
    path: 'account-settings',
    children: [
      { path: '', component: AccountInfoComponent },
      { path: 'add-payment-card', component: AddPaymentCardComponent },
      { path: 'change-email', component: ChangeEmailComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'close-account', component: CloseAccountComponent },
      { path: 'linked-accounts', component: LinkedAccountsComponent },
      { path: 'verify-account', component: VerifyAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountSettingsRoutingModule {}
