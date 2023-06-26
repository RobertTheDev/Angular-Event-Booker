import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.contentfulService.getAllEntries();
  }
}
