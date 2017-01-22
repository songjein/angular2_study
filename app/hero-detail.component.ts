import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// metadata
@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
			<div>
				<label>name: </label>
				<input [(ngModel)]="hero.name" placeholder="name"/>
			</div>
		</div>
	`
})

export class HeroDetailComponent{
	// this will be the target of a property binding
	@Input()
	hero: Hero;		
}
