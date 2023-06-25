import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeEmailComponent } from './views/change-email/change-email.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { AddPaymentCardComponent } from './views/add-payment-card/add-payment-card.component';
import { LinkedAccountsComponent } from './views/linked-accounts/linked-accounts.component';
import { CloseAccountComponent } from './views/close-account/close-account.component';
import { AccountInfoComponent } from './views/account-info/account-info.component';
import { AccountSettingsMenuComponent } from './components/account-settings-menu/account-settings-menu.component';
import { AccountSettingsLayoutComponent } from './components/account-settings-layout/account-settings-layout.component';
import { VerifyAccountComponent } from './views/verify-account/verify-account.component';

@NgModule({
  declarations: [
    AccountSettingsLayoutComponent,
    AccountSettingsMenuComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    AddPaymentCardComponent,
    LinkedAccountsComponent,
    CloseAccountComponent,
    AccountInfoComponent,
    VerifyAccountComponent,
  ],
  imports: [CommonModule],
})
export class AccountSettingsModule {}
