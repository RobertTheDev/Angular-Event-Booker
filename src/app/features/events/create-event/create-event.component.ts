import { Component } from '@angular/core';
import eventCategories from 'src/app/lib/constants/eventCategories';
import eventTypes from 'src/app/lib/constants/eventTypes';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  eventCategories = eventCategories;
  eventTypes = eventTypes;

  inputText: string = '';
  maxCharacterLimit: number = 75;

  checkCharacterLimit() {
    if (this.inputText.length > this.maxCharacterLimit) {
      this.inputText = this.inputText.slice(0, this.maxCharacterLimit);
    }
  }

  limitCharacterInput(event: KeyboardEvent) {
    if (this.inputText.length >= this.maxCharacterLimit) {
      event.preventDefault();
    }
  }
}
