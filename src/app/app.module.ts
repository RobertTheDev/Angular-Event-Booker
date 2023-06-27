import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './features/home/home.module';

import { OrganisationsModule } from './features/organisations/organisations.module';
import { InfoModule } from './features/info/info.module';
import { EventsModule } from './features/events/events.module';
import { NotFoundModule } from './features/not-found/not-found.module';
import { AuthModule } from './features/auth/auth.module';

import { SharedModule } from './shared/shared.module';
import { AccountSettingsModule } from './features/account-settings/account-settings.module';
import { SupabaseService } from './services/supabase/supabase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    HomeModule,
    AuthModule,
    OrganisationsModule,
    InfoModule,
    EventsModule,
    AccountSettingsModule,
    NotFoundModule,
    SharedModule,
  ],
  providers: [SupabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
