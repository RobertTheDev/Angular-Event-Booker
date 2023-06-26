import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor(private contentfulService: ContentfulService) {}

  page$: Observable<any> | undefined;

  ngOnInit() {
    this.page$ = this.contentfulService.getEntryByField();
  }
}
