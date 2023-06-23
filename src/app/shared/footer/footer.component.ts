import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import companyName from 'src/app/lib/constants/companyName';
import footerLinks from 'src/app/lib/links/footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  footerLinks = footerLinks;

  currentYear = new Date().getFullYear();

  companyName = companyName;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
}
