import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-businesses',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-businesses.component.html',
	styleUrl: './for-businesses.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBusinessesPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які бізнеси можуть розміщуватися на Robotics?',
			answer: 'Сервісні центри, орендні компанії, інтегратори та будь-який бізнес, що надає роботів чи робототехнічні послуги.',
		},
		{
			question: 'Чи можу я пропонувати ремонт і обслуговування?',
			answer: 'Так, ви можете вести записи обслуговування прямо в паспорті апарата клієнта — це стає частиною перевірної історії робота.',
		},
		{
			question: 'Як формуються замовлення?',
			answer: 'Клієнти публікують місії або орендують/купують техніку напряму з вашого каталогу, а угода фіксується разом з паспортом апарата.',
		},
	];
}
