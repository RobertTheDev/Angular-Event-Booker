import { Component } from '@angular/core';
import headerLinks from '../../../lib/links/headerLinks';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import companyName from 'src/app/lib/companyName';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerLinks = headerLinks;

  companyName = companyName;

  faBars = faBars;
}
