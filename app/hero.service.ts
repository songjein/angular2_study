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
}

/*
* Our service could get data from anywhere
* It could get the data from a web service or local storage
* 
* Although the implementation is changed, We don't need to touch
* other component
**/
