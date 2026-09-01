import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { RobotShortComponent } from '../../features/robot/robot-short/robot-short.component';
import { Robot } from '../../features/robot/robot.interface';
import { robots } from '../../features/robot/robot.data';

@Component({
	imports: [RobotShortComponent, FormsModule, InputTextModule, TranslateDirective],
	templateUrl: './robots.component.html',
	styleUrl: './robots.component.scss',
})
export class RobotsComponent {
	private readonly _router = inject(Router);
	readonly translateService = inject(TranslateService);

	readonly searchTerm = signal('');

	readonly results = computed<Robot[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return robots;

		return robots.filter((item) => {
			const haystack = [item.name, item.region, item.country, item.manufacturer, item.currentTask]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Robot): void {
		this._router.navigate(['/robot', item._id]);
	}
}
