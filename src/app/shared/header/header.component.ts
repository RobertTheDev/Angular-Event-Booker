import { Component } from '@angular/core';
import {
  faBell,
  faHeart,
  faTicket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import companyName from 'src/app/lib/constants/companyName';
import headerLinks from 'src/app/lib/links/headerLinks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  headerLinks = headerLinks;

  companyName = companyName;

  faBell = faBell;
  faHeart = faHeart;
  faUser = faUser;
  faTicket = faTicket;

  controlNameActive: string | null = null;

  handleMouseOver(controlName: string) {
    this.controlNameActive = controlName;
  }

  handleMouseOut(controlName: string) {
    if (this.controlNameActive === controlName) {
      this.controlNameActive = null;
    }
  }
}
