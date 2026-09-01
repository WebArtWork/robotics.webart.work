import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RobotRecord } from '../../robot-record/robot-record.interface';
import { RobotRecordShortComponent } from '../../robot-record/robot-record-short/robot-record-short.component';
import { Robot } from '../robot.interface';
import {
	ROBOT_OWNERSHIP_STATUS_LABELS,
	ROBOT_STATUS_LABELS,
	ROBOT_VISIBILITY_LABELS,
	categoryEmoji,
} from '../robot-labels';
import { MissionHistoryEntry, missionHistoryForRobot } from '../robot-relations';

const DEFAULT_PHOTO = '/robot-default.png';

@Component({
	selector: 'app-robot-view',
	standalone: true,
	imports: [CommonModule, RobotRecordShortComponent],
	templateUrl: './robot-view.component.html',
	styleUrl: './robot-view.component.scss',
})
export class RobotViewComponent implements OnChanges {
	private readonly _router = inject(Router);
	private readonly _failedPhotos = new Set<string>();
	private readonly _records = signal<RobotRecord[]>([]);

	@Input() entity!: Robot;
	@Input() set records(value: RobotRecord[]) {
		this._records.set(value ?? []);
	}

	readonly defaultPhoto = DEFAULT_PHOTO;
	readonly ownershipStatusLabels = ROBOT_OWNERSHIP_STATUS_LABELS;
	readonly statusLabels = ROBOT_STATUS_LABELS;
	readonly visibilityLabels = ROBOT_VISIBILITY_LABELS;
	readonly categoryEmoji = categoryEmoji;

	readonly missionHistory = computed<MissionHistoryEntry[]>(() => missionHistoryForRobot(this._records()));

	readonly historyRecords = computed<RobotRecord[]>(() =>
		[...this._records()].sort((a, b) => b.eventDate.localeCompare(a.eventDate)),
	);

	get photos(): string[] {
		const uniquePhotos = [...new Set(this.entity.photos)];
		if (!uniquePhotos.length) return [DEFAULT_PHOTO];
		return uniquePhotos.every((photo) => this._failedPhotos.has(photo)) ? [DEFAULT_PHOTO] : uniquePhotos;
	}

	onPhotoError(event: Event, photo: string): void {
		this._failedPhotos.add(photo);
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['entity']) this._failedPhotos.clear();
	}

	viewRecord(record: RobotRecord): void {
		this._router.navigate(['/robot-record', record._id]);
	}
}
