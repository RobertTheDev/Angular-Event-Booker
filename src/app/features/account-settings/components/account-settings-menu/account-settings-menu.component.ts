import { Component } from '@angular/core';
import accountSettingsLinks from '../../account-settings-links';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-settings-menu',
  templateUrl: './account-settings-menu.component.html',
})
export class AccountSettingsMenuComponent {
  constructor(private router: Router) {}

  accountSettingsLinks = accountSettingsLinks;

  navigateToLink(href: string) {
    this.router.navigate([href]);
  }
}
