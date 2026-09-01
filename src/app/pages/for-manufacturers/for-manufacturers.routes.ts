import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-manufacturers.component').then((m) => m.ForManufacturersPageComponent),
	},
];
