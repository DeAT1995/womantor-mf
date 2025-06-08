import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('auth/LoginComponent').then((m) => m.LoginComponent),
  },
  {
    path: 'match',
    loadComponent: () =>
      import('match/MatchmakingComponent').then((m) => m.MatchmakingComponent),
  },
];
