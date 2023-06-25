import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organise-event',
  templateUrl: './organise-event.component.html',
  styleUrls: ['./organise-event.component.sass'],
})
export class OrganiseEventComponent {
  constructor(private router: Router) {}

  navigateToLink(href: string) {
    this.router.navigate([href]);
  }
}
