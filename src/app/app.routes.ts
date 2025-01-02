import type { Routes } from '@angular/router';
import { BlogDetailPage } from './pages/blog/detail/blog-detail-page.component';
import { BlogListPage } from './pages/blog/list/blog-list-page.component';
import { TopPage } from './pages/top/top-page.component';

export const routes: Routes = [
  { path: '', component: TopPage },
  { path: 'blog', component: BlogListPage },
  { path: 'blog/:id', component: BlogDetailPage },
];
