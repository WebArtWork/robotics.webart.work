import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./robot-record.component').then((m) => m.RobotRecordComponent),
	},
];
