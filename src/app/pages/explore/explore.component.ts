import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotShortComponent } from '../../features/robot/robot-short/robot-short.component';
import { ROBOT_OWNERSHIP_STATUS_OPTIONS } from '../../features/robot/robot-labels';
import { Robot, RobotOwnershipStatus } from '../../features/robot/robot.interface';
import { robots } from '../../features/robot/robot.data';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RobotShortComponent,
		FormsModule,
		RouterLink,
		ButtonModule,
		InputTextModule,
		SelectModule,
		MultiSelectModule,
		TranslateDirective,
	],
	templateUrl: './explore.component.html',
	styleUrl: './explore.component.scss',
})
export class ExploreComponent {
	private readonly _router = inject(Router);

	readonly ownershipStatusOptions = ROBOT_OWNERSHIP_STATUS_OPTIONS;

	readonly taskOptions: { label: string; value: string }[] = [
		...new Set(robots.map((item) => item.currentTask).filter((c): c is string => !!c)),
	].map((task) => ({ label: task, value: task }));

	readonly searchTerm = signal('');
	readonly selectedOwnershipStatuses = signal<RobotOwnershipStatus[]>([]);
	readonly selectedTask = signal<string | null>(null);

	readonly results = computed<Robot[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();
		const statuses = this.selectedOwnershipStatuses();
		const task = this.selectedTask();

		return robots.filter((item) => {
			if (term) {
				const haystack = [item.name, item.region, item.country, item.manufacturer].filter(Boolean).join(' ').toLowerCase();
				if (!haystack.includes(term)) {
					return false;
				}
			}

			if (statuses.length && !statuses.includes(item.ownershipStatus)) {
				return false;
			}

			if (task && item.currentTask !== task) {
				return false;
			}

			return true;
		});
	});

	view(item: Robot): void {
		this._router.navigate(['/robot', item._id]);
	}
}
