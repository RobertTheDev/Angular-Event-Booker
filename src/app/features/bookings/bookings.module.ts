import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBookingsComponent } from '../profile/my-bookings/my-bookings.component';
import { CompanyBookingsComponent } from './company-bookings/company-bookings.component';

@NgModule({
  declarations: [MyBookingsComponent, CompanyBookingsComponent],
  imports: [CommonModule],
})
export class BookingsModule {}
