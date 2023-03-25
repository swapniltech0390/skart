import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@skart/angular/products').then((m) => m.AngularProductsModule),
  },
];
