import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotViewComponent } from '../../features/robot/robot-view/robot-view.component';
import { Robot } from '../../features/robot/robot.interface';
import { robots } from '../../features/robot/robot.data';
import { RobotRelations, relationsForRobot } from '../../features/robot/robot-relations';

@Component({
	imports: [RobotViewComponent, CardModule, TranslateDirective],
	templateUrl: './robot.component.html',
	styleUrl: './robot.component.scss',
})
export class RobotComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Robot | undefined>(() =>
		robots.find((item) => item._id === this._id()),
	);

	readonly relations = computed<RobotRelations | null>(() => {
		const robot = this.entity();
		return robot ? relationsForRobot(robot) : null;
	});
}
