import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
