import { Component } from '@angular/core';
import footerLinks from 'src/app/lib/links/footerLinks';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import companyName from 'src/app/lib/companyName';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  footerLinks = footerLinks;

  year = new Date().getFullYear();

  companyName = companyName;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
}
