import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


/*
* We imported the Angular Injectable function
* and applied that function as an @Injectable() decorator
**/
@Injectable()
export class HeroService {

	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			// simulate server latency with 2s delay
			setTimeout(() => resolve(this.getHeroes()), 2000);
		});
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}
}

/*
* Our service could get data from anywhere
* It could get the data from a web service or local storage
* 
* Although the implementation is changed, We don't need to touch
* other component
* 
* That's the beauty of removing data access from the component.
**/
