import { RobotRecordStatus, RobotRecordType, RobotRecordVisibility } from './robot-record.interface';

/**
 * Ukrainian labels for robot-record enums, shared between the record form
 * and the record detail view so both stay in sync.
 */
export const ROBOT_RECORD_TYPE_OPTIONS: { value: RobotRecordType; label: string }[] = [
	{ value: 'deployment', label: 'Введення в експлуатацію' },
	{ value: 'maintenance', label: 'Обслуговування' },
	{ value: 'software-update', label: 'Оновлення прошивки' },
	{ value: 'task-run', label: 'Виконання завдання' },
	{ value: 'sensor-fault', label: 'Несправність датчика' },
	{ value: 'diagnostic', label: 'Діагностика' },
	{ value: 'problem', label: 'Проблема' },
	{ value: 'mission-complete', label: 'Завершена місія' },
	{ value: 'ownership-change', label: 'Зміна власника/оператора' },
	{ value: 'document', label: 'Документ' },
	{ value: 'note', label: 'Примітка' },
];

export const ROBOT_RECORD_STATUS_OPTIONS: { value: RobotRecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const ROBOT_RECORD_VISIBILITY_OPTIONS: { value: RobotRecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-renter', label: 'Доступ орендарю' },
];

export const ROBOT_RECORD_TYPE_LABELS: Record<RobotRecordType, string> = Object.fromEntries(
	ROBOT_RECORD_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotRecordType, string>;

export const ROBOT_RECORD_STATUS_LABELS: Record<RobotRecordStatus, string> = Object.fromEntries(
	ROBOT_RECORD_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotRecordStatus, string>;

export const ROBOT_RECORD_VISIBILITY_LABELS: Record<RobotRecordVisibility, string> = Object.fromEntries(
	ROBOT_RECORD_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotRecordVisibility, string>;
