import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { RobotShortComponent } from '../../features/robot/robot-short/robot-short.component';
import { LeafletMapComponent, LeafletMapMarker } from '../../shared/leaflet-map/leaflet-map.component';
import { Robot } from '../../features/robot/robot.interface';
import { robots } from '../../features/robot/robot.data';

/**
 * Deviation note: `@wawjs/ngx-map`'s `MapComponent` wraps `@angular/google-maps`
 * and requires a Google Maps JS API key/loader. This repo has none configured,
 * so this page renders a real interactive map using `leaflet` + OpenStreetMap
 * tiles via the shared `LeafletMapComponent` wrapper, which needs no API key.
 */
@Component({
	imports: [ButtonModule, CardModule, RobotShortComponent, LeafletMapComponent, TranslateDirective],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
	private readonly _router = inject(Router);

	readonly selected = signal<Robot | null>(null);
	private readonly _focusCenter = signal<{ lat: number; lng: number } | null>(null);

	readonly robotsWithCoords = computed(() => robots.filter((item) => item.coordinates));

	private readonly _defaultCenter = computed<{ lat: number; lng: number }>(() => {
		const withCoords = this.robotsWithCoords();
		if (!withCoords.length) {
			return { lat: 49.0, lng: 32.0 }; // central Ukraine, as a sensible default
		}

		const lats = withCoords.map((item) => item.coordinates.lat);
		const lngs = withCoords.map((item) => item.coordinates.lng);
		return {
			lat: (Math.min(...lats) + Math.max(...lats)) / 2,
			lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
		};
	});

	readonly center = computed<{ lat: number; lng: number }>(() => this._focusCenter() ?? this._defaultCenter());

	readonly zoom = 6;

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.robotsWithCoords().map((robot) => ({
			id: robot._id,
			position: robot.coordinates,
			title: robot.name,
		})),
	);

	onMarkerSelected(marker: LeafletMapMarker): void {
		const robot = robots.find((item) => item._id === marker.id) ?? null;
		this.selected.set(robot);
	}

	closePanel(): void {
		this.selected.set(null);
	}

	view(robot: Robot): void {
		this._router.navigate(['/robot', robot._id]);
	}
}
