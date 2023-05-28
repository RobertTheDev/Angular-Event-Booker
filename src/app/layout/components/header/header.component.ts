import { Component } from '@angular/core';
import headerLinks from '../../../lib/links/headerLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  headerLinks = headerLinks;

  faBars = faBars;
}
