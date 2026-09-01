import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-operators',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-operators.component.html',
	styleUrl: './for-operators.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForOperatorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Які пілоти/оператори можуть зареєструватися?',
			answer: 'FPV та камера-пілоти дронів, оператори наземних роботів і супервізори автономних систем — будь-хто з підтвердженою кваліфікацією на клас техніки.',
		},
		{
			question: 'Як формується моя репутація на платформі?',
			answer: 'Кожна виконана місія, наліт годин і сертифікація додаються до вашого профілю — це перевірна історія, яку бачить бізнес, що наймає.',
		},
		{
			question: 'Чи можу я працювати з власною технікою?',
			answer: 'Так, ви можете підключити власних роботів або братися за місії з технікою власника, який шукає оператора.',
		},
	];
}
