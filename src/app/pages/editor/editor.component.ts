import { ChangeDetectionStrategy, Component, computed, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotFormComponent } from '../../features/robot/robot-form/robot-form.component';
import { RobotRecordFormComponent } from '../../features/robot-record/robot-record-form/robot-record-form.component';

type EntityType = 'robot' | 'robot-record';

interface EntityOption {
	label: string;
	value: EntityType;
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		SelectButtonModule,
		RobotFormComponent,
		RobotRecordFormComponent,
		TranslateDirective,
	],
	templateUrl: './editor.component.html',
	styleUrl: './editor.component.scss',
})
export class EditorComponent {
	private readonly _messageService = inject(MessageService);

	readonly options: EntityOption[] = [
		{ label: 'Робот', value: 'robot' },
		{ label: 'Запис історії робота', value: 'robot-record' },
	];

	readonly selectedType = signal<EntityType>('robot');

	private readonly _robotForm = viewChild(RobotFormComponent);
	private readonly _robotRecordForm = viewChild(RobotRecordFormComponent);

	private readonly _activeForm = computed(() => {
		switch (this.selectedType()) {
			case 'robot':
				return this._robotForm()?.form;
			case 'robot-record':
				return this._robotRecordForm()?.form;
			default:
				return undefined;
		}
	});

	wValidate(): void {
		const form = this._activeForm();
		if (!form) {
			return;
		}

		form.markAllAsTouched();
		form.updateValueAndValidity();

		if (form.valid) {
			this._messageService.add({
				severity: 'success',
				summary: 'Форма валідна',
				detail: 'Дані пройшли валідацію. Це демо-режим — нічого не збережено.',
			});
		} else {
			this._messageService.add({
				severity: 'error',
				summary: 'Форма містить помилки',
				detail: 'Перевірте позначені поля та спробуйте ще раз.',
			});
		}
	}
}
