import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface SpecialistPlaceholder {
	name: string;
	region: string;
	skill: string;
}

@Component({
	selector: 'app-specialists',
	imports: [RouterLink, TranslateDirective],
	templateUrl: './specialists.component.html',
	styleUrl: './specialists.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistsComponent {
	readonly translateService = inject(TranslateService);

	readonly specialists: SpecialistPlaceholder[] = [
		{ name: 'Олег Гриценко', region: 'Київ', skill: 'Інтеграція дронів' },
		{ name: 'Марія Ковальська', region: 'Львів', skill: 'Обслуговування маніпуляторів' },
		{ name: 'Андрій Сидоренко', region: 'Одеса', skill: 'Наземні платформи' },
		{ name: 'Ірина Ткаченко', region: 'Харків', skill: 'Промислова автоматизація' },
		{ name: 'Павло Мельник', region: 'Дніпро', skill: 'Діагностика та ремонт' },
	];
}
