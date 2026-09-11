import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from '@wawjs/ngx-prime/animateonscroll';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface LandingFeature {
	number: string;
	icon: string;
	title: string;
	description: string;
	linkLabel: string;
	route: string;
}

interface LandingFleetEvent {
	date: string;
	icon: string;
	title: string;
	description: string;
	tag: string;
}

interface LandingAudience {
	number: string;
	route: string;
	title: string;
	description: string;
}

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	imports: [
		RouterLink,
		ButtonModule,
		CardModule,
		TranslateDirective,
		AnimateOnScrollModule,
	],
})
export class LandingComponent {
	readonly translateService = inject(TranslateService);

	readonly fleetEvents: LandingFleetEvent[] = [
		{
			date: 'Червень 2026',
			icon: 'pi pi-wrench',
			title: 'Планове обслуговування',
			description: 'Заміна батареї та калібрування сенсорів',
			tag: 'Обслуговування',
		},
		{
			date: 'Березень 2026',
			icon: 'pi pi-send',
			title: 'Виконано місію',
			description: 'Аерофотозйомка поля, 340 га',
			tag: 'Місія',
		},
		{
			date: 'Січень 2026',
			icon: 'pi pi-refresh',
			title: 'Оновлення прошивки',
			description: 'Версія 2.4 від виробника',
			tag: 'Прошивка',
		},
	];

	readonly features: LandingFeature[] = [
		{
			number: '01',
			icon: 'pi pi-box',
			title: 'Каталог роботів',
			description: 'Дрони, наземні роботи та маніпулятори з паспортом і повною історією експлуатації.',
			linkLabel: 'Переглянути роботів',
			route: '/robots',
		},
		{
			number: '02',
			icon: 'pi pi-building',
			title: 'Виробники',
			description: 'Моделі, компоненти та прошивки напряму від компаній, що виробляють техніку.',
			linkLabel: 'Переглянути виробників',
			route: '/manufacturers',
		},
		{
			number: '03',
			icon: 'pi pi-id-card',
			title: 'Спеціалісти',
			description: 'Інженери для встановлення, налаштування та обслуговування роботів.',
			linkLabel: 'Переглянути спеціалістів',
			route: '/specialists',
		},
		{
			number: '04',
			icon: 'pi pi-map',
			title: 'Карта та пошук',
			description: 'Знаходьте роботів за розташуванням, статусом власності та завданням.',
			linkLabel: 'Відкрити карту',
			route: '/map',
		},
	];

	readonly audiences: LandingAudience[] = [
		{
			number: '01',
			route: '/for-users',
			title: 'Користувачам',
			description: 'Купуйте, орендуйте або наймайте роботів із перевіреною історією.',
		},
		{
			number: '02',
			route: '/for-operators',
			title: 'Операторам',
			description: 'Пропонуйте себе як пілота дрона чи оператора з підтвердженими місіями.',
		},
		{
			number: '03',
			route: '/for-businesses',
			title: 'Бізнесу',
			description: 'Надавайте оренду, ремонт, обслуговування чи інтеграцію роботів.',
		},
		{
			number: '04',
			route: '/for-manufacturers',
			title: 'Виробникам',
			description: 'Публікуйте моделі та прошивки, відстежуйте реальну експлуатацію техніки.',
		},
	];
}
