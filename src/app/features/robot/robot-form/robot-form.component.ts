import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { Robot } from '../robot.interface';
import {
	ROBOT_CATEGORY_OPTIONS,
	ROBOT_OWNERSHIP_STATUS_OPTIONS,
	ROBOT_STATUS_OPTIONS,
	ROBOT_VISIBILITY_OPTIONS,
} from '../robot-labels';

@Component({
	selector: 'app-robot-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		SelectModule,
		TranslateDirective,
	],
	templateUrl: './robot-form.component.html',
	styleUrl: './robot-form.component.scss',
})
export class RobotFormComponent implements OnInit {
	@Input() entity?: Robot;

	readonly form: FormGroup;
	readonly categoryOptions = ROBOT_CATEGORY_OPTIONS;
	readonly ownershipStatusOptions = ROBOT_OWNERSHIP_STATUS_OPTIONS;
	readonly statusOptions = ROBOT_STATUS_OPTIONS;
	readonly visibilityOptions = ROBOT_VISIBILITY_OPTIONS;

	constructor(private readonly fb: FormBuilder) {
		this.form = this.fb.group({
			name: ['', Validators.required],
			category: ['air', Validators.required],
			manufacturer: ['', Validators.required],
			country: ['', Validators.required],
			region: ['', Validators.required],
			operatingHours: [null, Validators.required],
			serialNumber: [''],
			ownershipStatus: ['owned', Validators.required],
			status: ['active', Validators.required],
			visibility: ['private', Validators.required],
			currentTask: [''],
			pricePerDay: [null],
			currency: [null],
		});
	}

	ngOnInit(): void {
		if (this.entity) {
			this.form.patchValue(this.entity);
		}
	}
}
