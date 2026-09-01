import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./robot.component').then((m) => m.RobotComponent),
	},
];
