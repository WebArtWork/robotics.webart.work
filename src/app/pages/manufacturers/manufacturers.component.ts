import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';

interface ManufacturerPlaceholder {
	name: string;
	country: string;
	specialty: string;
}

@Component({
	selector: 'app-manufacturers',
	imports: [RouterLink, TranslateDirective],
	templateUrl: './manufacturers.component.html',
	styleUrl: './manufacturers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManufacturersComponent {
	readonly translateService = inject(TranslateService);

	readonly manufacturers: ManufacturerPlaceholder[] = [
		{ name: 'AeroDrive Robotics', country: 'Україна', specialty: 'Промислові дрони' },
		{ name: 'GroundLine Systems', country: 'Польща', specialty: 'Наземні платформи' },
		{ name: 'ArmTech Industries', country: 'Німеччина', specialty: 'Маніпулятори' },
		{ name: 'FieldBot Manufacturing', country: 'Україна', specialty: 'Сільськогосподарські роботи' },
		{ name: 'UrbanRover Co.', country: 'Естонія', specialty: 'Логістичні роботи' },
		{ name: 'Specter Automation', country: 'Чехія', specialty: 'Спеціалізована техніка' },
	];
}
