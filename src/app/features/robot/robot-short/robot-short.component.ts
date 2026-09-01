import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Robot } from '../robot.interface';
import { ROBOT_OWNERSHIP_STATUS_LABELS } from '../robot-labels';

const DEFAULT_PHOTO = '/robot-default.png';

@Component({
	selector: 'app-robot-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './robot-short.component.html',
	styleUrl: './robot-short.component.scss',
})
export class RobotShortComponent {
	@Input() entity!: Robot;

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly ownershipStatusLabels = ROBOT_OWNERSHIP_STATUS_LABELS;

	get photo(): string {
		return this.entity.photos[0] || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
