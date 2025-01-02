import { PrerenderFallback, RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    async getPrerenderParams() {
      const ids = ['1', '2', '3', '4', '5'];
      return ids.map((id) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
