import {
	Component,
	computed,
	inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { CompanyService } from '../../features/company/company.service';
import { FooterLink } from './footer.types';

@Component({
	selector: 'layout-footer',
	templateUrl: './footer.component.html',
	imports: [RouterLink, TranslateDirective],
})
export class FooterComponent {
	readonly userService = inject(UserService);
	readonly companyService = inject(CompanyService);

	readonly year = new Date().getFullYear();
	readonly metaTitle = this.companyService.company().title;
	readonly metaDescription = this.companyService.company().description;

	private readonly allLinks = computed<FooterLink[]>(() => [
		{ label: 'Головна', icon: 'home', to: '/' },
		{ label: 'Профіль', icon: 'user', to: '/profile' },
		{ label: 'Роботи', icon: 'microchip', to: '/robots' },
		{ label: 'Стрічка', icon: 'images', to: '/feed' },
		{ label: 'Пошук', icon: 'search', to: '/explore' },
		{ label: 'Карта', icon: 'map', to: '/map' },
		{ label: 'Редактор', icon: 'table', to: '/editor' },
		{ label: 'Запросити', icon: 'send', to: '/share' },
		{ label: 'Для користувачів', icon: 'list', to: '/for-users' },
		{ label: 'Для операторів', icon: 'id-card', to: '/for-operators' },
		{ label: 'Для бізнесу', icon: 'briefcase', to: '/for-businesses' },
		{
			label: 'Для виробників',
			icon: 'building',
			to: '/for-manufacturers',
		},
		{
			label: 'Користувачі',
			icon: 'user-edit',
			to: '/admin/users',
			adminOnly: true,
		},
		{
			label: 'Клієнти',
			icon: 'users',
			to: '/admin/clients',
			adminOnly: true,
		},
		{
			label: 'Форми',
			icon: 'table',
			to: '/admin/forms',
			adminOnly: true,
		},
		{
			label: 'Переклади',
			icon: 'language',
			to: '/admin/translates',
			adminOnly: true,
		},
	]);

	readonly links = computed(() => {
		const isAdmin = this.userService.role('admin');
		return this.allLinks().filter((l) => !l.adminOnly || isAdmin);
	});
}
