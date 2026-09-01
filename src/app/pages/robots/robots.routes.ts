import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./robots.component').then((m) => m.RobotsComponent),
	},
];
