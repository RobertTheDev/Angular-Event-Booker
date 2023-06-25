import { Component, ElementRef, HostListener } from '@angular/core';
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
  signedIn = true;
  isProfileMenuActive = false;
  profileMenuLinks = profileMenuLinks;

  constructor(private elementRef: ElementRef) {}

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

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.profileMenu = false;
    }
  }

  toggleProfileMenu() {
    this.profileMenu = !this.profileMenu;
  }
}
