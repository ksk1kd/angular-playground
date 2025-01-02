import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
})
export class BlogDetailPage {
  private route = inject(ActivatedRoute);
  id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }
}
