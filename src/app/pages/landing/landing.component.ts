import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	templateUrl: './landing.component.html',
	imports: [RouterLink, ButtonModule, TranslateDirective],
})
export class LandingComponent {}
