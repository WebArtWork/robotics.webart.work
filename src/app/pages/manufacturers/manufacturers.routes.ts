import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./manufacturers.component').then((m) => m.ManufacturersComponent),
	},
];
