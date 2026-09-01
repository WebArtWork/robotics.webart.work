import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotRecordViewComponent } from '../../features/robot-record/robot-record-view/robot-record-view.component';
import { RobotRecord } from '../../features/robot-record/robot-record.interface';
import { robotRecords } from '../../features/robot-record/robot-record.data';
import { Robot } from '../../features/robot/robot.interface';
import { robots } from '../../features/robot/robot.data';

const _robotById = new Map<string, Robot>(robots.map((r) => [r._id, r]));

@Component({
	imports: [RobotRecordViewComponent, CardModule, TranslateDirective],
	templateUrl: './robot-record.component.html',
	styleUrl: './robot-record.component.scss',
})
export class RobotRecordComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<RobotRecord | undefined>(() =>
		robotRecords.find((item) => item._id === this._id()),
	);

	readonly robot = computed<Robot | null>(() => {
		const record = this.entity();
		return record ? (_robotById.get(record.robotId) ?? null) : null;
	});
}
