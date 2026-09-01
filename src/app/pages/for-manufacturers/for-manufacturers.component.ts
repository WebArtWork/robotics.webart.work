import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-manufacturers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-manufacturers.component.html',
	styleUrl: './for-manufacturers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForManufacturersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Що можна розмістити як виробник?',
			answer: 'Моделі роботів, компоненти, прошивки та повні платформи — з технічними характеристиками, які бачать покупці, оператори та сервісні центри.',
		},
		{
			question: 'Чи бачу я, як реально використовується моя техніка?',
			answer: 'Так, паспорт кожного проданого апарата (наліт годин, обслуговування, місії) допомагає зрозуміти реальну експлуатацію моделі в полі.',
		},
		{
			question: 'Чи можу я публікувати оновлення прошивки для власників?',
			answer: 'Так, версії прошивки прив’язуються до профілю моделі та історії конкретного апарата, тож власники бачать актуальні оновлення.',
		},
	];
}
