import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RobotRecord } from '../robot-record.interface';
import { ROBOT_RECORD_TYPE_LABELS } from '../robot-record-labels';

@Component({
	selector: 'app-robot-record-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './robot-record-short.component.html',
	styleUrl: './robot-record-short.component.scss',
})
export class RobotRecordShortComponent {
	@Input() entity!: RobotRecord;

	readonly typeLabels = ROBOT_RECORD_TYPE_LABELS;
}
