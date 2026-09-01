import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotRecord } from '../robot-record.interface';
import {
	ROBOT_RECORD_STATUS_OPTIONS,
	ROBOT_RECORD_TYPE_OPTIONS,
	ROBOT_RECORD_VISIBILITY_OPTIONS,
} from '../robot-record-labels';

@Component({
	selector: 'app-robot-record-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TextareaModule,
		TranslateDirective,
	],
	templateUrl: './robot-record-form.component.html',
	styleUrl: './robot-record-form.component.scss',
})
export class RobotRecordFormComponent implements OnInit {
	@Input() entity?: RobotRecord;

	readonly form: FormGroup;
	readonly recordTypeOptions = ROBOT_RECORD_TYPE_OPTIONS;
	readonly statusOptions = ROBOT_RECORD_STATUS_OPTIONS;
	readonly visibilityOptions = ROBOT_RECORD_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			year: [new Date().getFullYear(), Validators.required],
			recordType: ['task-run', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required],
			eventDate: ['', Validators.required],
			payload: [''],
			firmwareVersion: [''],
			product: [''],
			quantity: [null],
			units: [''],
			cost: [null],
			currency: [null],
			distanceKm: [null],
			unitsProcessed: [null],
			batteryHealthPct: [null],
			status: ['planned', Validators.required],
			visibility: ['private', Validators.required],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
