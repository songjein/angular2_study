import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';

import { HeroService } from './hero.service';


@Component({
  selector: 'my-app', template: `
		<h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span>{{hero.name}}
			</li>
		</ul>
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;	
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.heroes li.selected:hover{
			background-color: #BBD8DC !important;	
			color: white;
		}
		.heroes li:hover{
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text{
			position: relative;
			top: -3px;
		}
		.heroes .badge{
			display: inline-block;	
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
	`],

	// s3. We have to teach injector how to make a HeroService
	// by registering a HeroService 'provider'
	providers: [HeroService]

	// s4. the providers array tells Angular to create a fresh instance
	// of the HeroService when it creates a new AppComponent
	// AppComponent can use that service to get heroes and so can every child
	// component of its component tree
})

export class AppComponent  { 
	name = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	// s1. Constructor itself does nothing.
	// The params simultaneously defines a private 'heroService' property
	// and identifies it as a 'HeroService' injection site.
	constructor(private heroService: HeroService){ }

	// s2. Now angular will know to suply an instance of the HeroService 
	// when it creates a new AppComponent
	// However, the injector does not know yet how to create a HeroService!(?)
	// (go to the provider s3.)

	onSelect(hero: Hero): void {
		this.selectedHero = hero;	
	}

	getHeroes(): void {
		//this.heroes = this.heroService.getHeroes();	
		// Our callback sets the component's heroes property to the array
		// of heroes returned by the service.
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();	
	}
}

/*
	We created a service class that can be shared by many components

	We used the ngOnInit Lifecycle Hook to get our heroes when our AppComponent activates

	We defined our HeroService as a provider for our AppComponent

	We created mock hero data and imported them into our service

	We designed our service to return an Promise and our component to get our data from the Promise

*/
