export type RobotRecordType =
	| 'deployment'
	| 'maintenance'
	| 'software-update'
	| 'task-run'
	| 'sensor-fault'
	| 'diagnostic'
	| 'problem'
	| 'mission-complete'
	| 'ownership-change'
	| 'document'
	| 'note';

export type RobotRecordStatus = 'planned' | 'in-progress' | 'completed' | 'cancelled';

export type RobotRecordVisibility =
	| 'public'
	| 'public-summary-private-details'
	| 'private'
	| 'shared-with-renter';

export interface RobotRecordAttachment {
	type: 'photo' | 'telemetry-log' | 'document' | 'diagnostic-report';
	url: string;
}

/**
 * A single entry in a robot's operating history — its "digital passport".
 * Attached to the robot itself (`robotId`), not the business currently
 * operating it, so the history survives a change of owner or operator.
 */
export interface RobotRecord {
	_id: string;
	robotId: string;
	year: number;
	recordType: RobotRecordType;
	title: string;
	description: string;
	eventDate: string;
	creationDate: string;
	payload: string | null;
	firmwareVersion: string | null;
	product: string | null;
	quantity: number | null;
	units: string | null;
	cost: number | null;
	currency: string | null;
	distanceKm: number | null;
	unitsProcessed: number | null;
	batteryHealthPct: number | null;
	status: RobotRecordStatus;
	attachments: RobotRecordAttachment[];
	visibility: RobotRecordVisibility;
	verified: boolean;
}
