export type RobotOwnershipStatus = 'owned' | 'rented' | 'for-sale' | 'for-rent';

export type RobotStatus = 'active' | 'maintenance' | 'archived' | 'unverified';

export type RobotVisibility = 'public' | 'listing-only' | 'private' | 'shared-with-fleet';

export type RobotCategory = 'air' | 'ground' | 'vehicle' | 'industrial' | 'specialized';

export interface Robot {
	_id: string;
	name: string;
	category: RobotCategory;
	manufacturer: string;
	country: string;
	region: string;
	operatingHours: number;
	coordinates: { lat: number; lng: number };
	serialNumber: string;
	ownershipStatus: RobotOwnershipStatus;
	fleetId: string | null;
	status: RobotStatus;
	visibility: RobotVisibility;
	currentTask: string | null;
	pricePerDay: number | null;
	currency: string | null;
	recordIds: string[];
	photos: string[];
}
