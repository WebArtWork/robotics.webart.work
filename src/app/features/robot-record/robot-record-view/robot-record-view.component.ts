import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RobotRecord } from '../robot-record.interface';
import {
	ROBOT_RECORD_STATUS_LABELS,
	ROBOT_RECORD_TYPE_LABELS,
	ROBOT_RECORD_VISIBILITY_LABELS,
} from '../robot-record-labels';
import { Robot } from '../../robot/robot.interface';
import { RobotShortComponent } from '../../robot/robot-short/robot-short.component';

@Component({
	selector: 'app-robot-record-view',
	standalone: true,
	imports: [CommonModule, RobotShortComponent],
	templateUrl: './robot-record-view.component.html',
	styleUrl: './robot-record-view.component.scss',
})
export class RobotRecordViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: RobotRecord;
	@Input() robot?: Robot | null;

	readonly typeLabels = ROBOT_RECORD_TYPE_LABELS;
	readonly statusLabels = ROBOT_RECORD_STATUS_LABELS;
	readonly visibilityLabels = ROBOT_RECORD_VISIBILITY_LABELS;

	viewRobot(): void {
		if (this.robot) this._router.navigate(['/robot', this.robot._id]);
	}
}
