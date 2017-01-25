import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
	// we set the moduleId prop so that templateUrl and styleUrls are
	// relative to the component
	moduleId: module.id,
  selector: 'my-heroes', 
	templateUrl: "heroes.component.html",
	styleUrls: ["heroes.component.css"]
})

export class HeroesComponent implements OnInit { 
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService 
	){}

	// how to inject service to somewhere??
	// s1. Constructor itself does nothing.
	// The params simultaneously defines a private 'heroService' property
	// and identifies it as a 'HeroService' injection site.

	// s2. Now angular will know to suply an instance of the HeroService 
	// when it creates a new AppComponent
	// However, the injector does not know yet how to create a HeroService!(?)
	// (go to the provider s3. at app.module.ts)

	onSelect(hero: Hero): void {
		this.selectedHero = hero;	
	}

	getHeroes(): void {
		// Our callback sets the component's heroes property to the array
		// of heroes returned by the service.
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();	
	}

	gotoDetail(): void {
		this.router.navigate(['/detail/', this.selectedHero.id]);	
	}
}

