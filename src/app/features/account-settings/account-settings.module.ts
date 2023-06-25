import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeEmailComponent } from './views/change-email/change-email.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { AddPaymentCardComponent } from './views/add-payment-card/add-payment-card.component';
import { LinkedAccountsComponent } from './views/linked-accounts/linked-accounts.component';
import { CloseAccountComponent } from './views/close-account/close-account.component';
import { AccountInfoComponent } from './views/account-info/account-info.component';

@NgModule({
  declarations: [
    ChangeEmailComponent,
    ChangePasswordComponent,
    AddPaymentCardComponent,
    LinkedAccountsComponent,
    CloseAccountComponent,
    AccountInfoComponent,
  ],
  imports: [CommonModule],
})
export class AccountSettingsModule {}
