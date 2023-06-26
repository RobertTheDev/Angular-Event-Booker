import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: '',
    accessToken: '',
  });

  getAllEntries() {
    this.client.getEntries().then((entries) => console.log(entries));
  }
}
