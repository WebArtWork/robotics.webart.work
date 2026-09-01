import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити в Robotics',
						description:
							'Відскануйте QR-код, щоб приєднатися до Robotics за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'robots',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Роботи',
						description: 'Перегляньте всіх роботів платформи Robotics.',
					},
				},
				loadChildren: () =>
					import('./pages/robots/robots.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'robot/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Робот',
						description: 'Цифровий паспорт робота: історія місій, обслуговування та повна історія апарата.',
					},
				},
				loadChildren: () =>
					import('./pages/robot/robot.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'robot-record/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис історії робота',
						description: 'Запис з цифрового паспорта робота: розгортання, обслуговування, місія чи діагностика.',
					},
				},
				loadChildren: () =>
					import('./pages/robot-record/robot-record.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description: 'Перегляньте стрічку роботів платформи Robotics.',
					},
				},
				loadChildren: () =>
					import('./pages/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пошук',
						description: 'Шукайте й фільтруйте роботів Robotics за статусом власності, завданням та регіоном.',
					},
				},
				loadChildren: () =>
					import('./pages/explore/explore.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Карта',
						description: 'Знаходьте роботів на карті Robotics за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/map/map.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Редактор',
						description: 'Спробуйте форми введення даних для робота та запису історії.',
					},
				},
				loadChildren: () =>
					import('./pages/editor/editor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для користувачів',
						description: 'Купуйте, орендуйте або наймайте роботів і робототехнічні послуги з перевіреною історією.',
					},
				},
				loadChildren: () =>
					import('./pages/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-operators',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для операторів',
						description: 'Пропонуйте себе як пілота дрона чи оператора робота з підтвердженою історією виконаних місій.',
					},
				},
				loadChildren: () =>
					import('./pages/for-operators/for-operators.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-businesses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для бізнесу',
						description: 'Пропонуйте оренду, ремонт, обслуговування чи інтеграцію роботів на платформі Robotics.',
					},
				},
				loadChildren: () =>
					import('./pages/for-businesses/for-businesses.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-manufacturers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для виробників',
						description: 'Публікуйте моделі роботів, компоненти та прошивки й відстежуйте їхню реальну експлуатацію.',
					},
				},
				loadChildren: () =>
					import('./pages/for-manufacturers/for-manufacturers.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
