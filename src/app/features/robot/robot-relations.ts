import { RobotRecord } from '../robot-record/robot-record.interface';
import { robotRecords } from '../robot-record/robot-record.data';
import { Robot } from './robot.interface';

/**
 * A robot's resolved history: it carries the authoritative `recordIds`,
 * this resolves them so the robot detail page can show (and link to) its
 * full "digital passport" instead of raw ids. History is resolved from the
 * robot itself, not from whichever business currently operates it — a
 * change of owner or operator does not reset it.
 */
export interface RobotRelations {
	records: RobotRecord[];
}

const _recordById = new Map<string, RobotRecord>(robotRecords.map((r) => [r._id, r]));

export function relationsForRobot(robot: Robot): RobotRelations {
	return {
		records: robot.recordIds
			.map((id) => _recordById.get(id))
			.filter((r): r is RobotRecord => !!r),
	};
}

export interface MissionHistoryEntry {
	year: number;
	task: string | null;
	distanceKm: number | null;
}

/**
 * One completed-mission entry per year, newest first — the "Matrice 350
 * RTK #12 — 1,240h / 2026 🛸 Field survey → 82 km" style summary shown at
 * the top of a robot's passport.
 */
export function missionHistoryForRobot(records: RobotRecord[]): MissionHistoryEntry[] {
	return records
		.filter((r) => r.recordType === 'mission-complete')
		.sort((a, b) => b.year - a.year)
		.map((r) => ({ year: r.year, task: r.payload, distanceKm: r.distanceKm }));
}
