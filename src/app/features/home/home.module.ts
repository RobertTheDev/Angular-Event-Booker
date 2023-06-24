import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from '../events/event-card/event-card.component';

@NgModule({
  declarations: [HomeComponent, EventCardComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
