import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css',]
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	// share the HeroService !!
	constructor(private heroService: HeroService) { }
	
	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}

/*
	how to inject service to somewhere?

	1. Define a heroes array property
	2. Inject the HeroService in the constructor and hold it in a
		private heroService field
	3. Call the service to get heroes inside the Angular ngOnInit lifecycle hook
*/
