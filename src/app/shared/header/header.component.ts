import { Component } from '@angular/core';
import {
  faBell,
  faHeart,
  faTicket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import companyName from 'src/app/lib/constants/companyName';
import headerLinks from 'src/app/lib/links/headerLinks';
import profileMenuLinks from 'src/app/lib/links/profileMenuLinks';

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
  profileMenu = false;
  signedIn = false;
  isProfileMenuActive = false;
  profileMenuLinks = profileMenuLinks;

  handleMouseOver(controlName: string) {
    if (controlName === 'profileMenu') {
      this.isProfileMenuActive = true;
    } else {
      this.controlNameActive = controlName;
    }
  }

  handleMouseOut(controlName: string) {
    if (controlName === 'profileMenu') {
      this.isProfileMenuActive = false;
    } else if (this.controlNameActive === controlName) {
      this.controlNameActive = null;
    }
  }

  openProfileMenu() {
    this.profileMenu = true;
  }

  closeProfileMenu() {
    this.profileMenu = false;
    this.isProfileMenuActive = false;
  }
}
