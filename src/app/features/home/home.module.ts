import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { EventsModule } from '../events/events.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, EventsModule],
})
export class HomeModule {}
