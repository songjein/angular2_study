import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

// metadata
@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html',
	styleUrls: ['hero-detail.component.css'],
})

/** 
* We will no longer receive the hero in a parent component property binding.
* The new HeroDetailComponent should take the id params from the 'params' 
* observable in the ActivatedRoute service and use the HeroService to fetch 
* the hero with that id
*/

export class HeroDetailComponent implements OnInit {
	// this will be the target of a property binding
	// @Input() hero: Hero;		

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}
	/**
	* Note that the switchMap operator maps the id in the observable
	* route params to a new Observable
	*
	* If the user re-navigate to this component while a getHero request is 
	* still inflight, switchMap cancels that old request before calling
	* HeroService.getHero again
	*/

	goBack(): void {
		this.location.back();	
	}
}
