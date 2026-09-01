import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Чим Robotics відрізняється від звичайної дошки оголошень?',
			answer: 'Кожен робот має власний паспорт — години нальоту чи роботи, обслуговування, заміну деталей і виконані місії, — тож ви бачите реальний стан техніки, а не лише фото.',
		},
		{
			question: 'Чи можу я найняти робота разом з оператором?',
			answer: 'Так, для більшості місій (зйомка, обстеження, доставка) можна орендувати робота разом із кваліфікованим оператором одним замовленням.',
		},
		{
			question: 'Які типи роботів доступні на платформі?',
			answer: 'Дрони, наземні роботи, автономні транспортні засоби, промислові маніпулятори та спеціалізована техніка — все в одному каталозі.',
		},
	];
}
