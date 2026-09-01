import { RobotCategory, RobotOwnershipStatus, RobotStatus, RobotVisibility } from './robot.interface';

/**
 * Ukrainian labels for robot enums, shared between the robot list/detail
 * views so they stay in sync.
 */
export const ROBOT_OWNERSHIP_STATUS_OPTIONS: { value: RobotOwnershipStatus; label: string }[] = [
	{ value: 'owned', label: 'У власності' },
	{ value: 'rented', label: 'В оренді' },
	{ value: 'for-sale', label: 'Продається' },
	{ value: 'for-rent', label: 'Здається в оренду' },
];

export const ROBOT_STATUS_OPTIONS: { value: RobotStatus; label: string }[] = [
	{ value: 'active', label: 'В експлуатації' },
	{ value: 'maintenance', label: 'На обслуговуванні' },
	{ value: 'archived', label: 'Архівний' },
	{ value: 'unverified', label: 'Неперевірений' },
];

export const ROBOT_VISIBILITY_OPTIONS: { value: RobotVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'listing-only', label: 'Лише в оголошенні' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-fleet', label: 'Доступний флоту' },
];

export const ROBOT_CATEGORY_OPTIONS: { value: RobotCategory; label: string }[] = [
	{ value: 'air', label: 'Повітряний' },
	{ value: 'ground', label: 'Наземний' },
	{ value: 'vehicle', label: 'Транспортний засіб' },
	{ value: 'industrial', label: 'Промисловий' },
	{ value: 'specialized', label: 'Спеціалізований' },
];

export const ROBOT_OWNERSHIP_STATUS_LABELS: Record<RobotOwnershipStatus, string> = Object.fromEntries(
	ROBOT_OWNERSHIP_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotOwnershipStatus, string>;

export const ROBOT_STATUS_LABELS: Record<RobotStatus, string> = Object.fromEntries(
	ROBOT_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotStatus, string>;

export const ROBOT_VISIBILITY_LABELS: Record<RobotVisibility, string> = Object.fromEntries(
	ROBOT_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotVisibility, string>;

export const ROBOT_CATEGORY_LABELS: Record<RobotCategory, string> = Object.fromEntries(
	ROBOT_CATEGORY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<RobotCategory, string>;

/** Emoji per robot category, purely cosmetic for cards and the mission-history timeline. */
export const CATEGORY_EMOJI: Record<RobotCategory, string> = {
	air: '🛸',
	ground: '🤖',
	vehicle: '🚗',
	industrial: '🦾',
	specialized: '🔧',
};

export function categoryEmoji(category: RobotCategory | null): string {
	if (!category) return '🤖';
	return CATEGORY_EMOJI[category] ?? '🤖';
}
