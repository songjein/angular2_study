import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
		<div>
			<label>id: </label>{{hero.id}}	
		</div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="hero.name" placeholder="name">
		</div>
	`,
})

export class AppComponent  { 
	name = 'Tour of Heroes';
	hero : Hero = {
		id: 1,
		name: 'Windstorm'
	};
}


/*
	Our Tour of Heros uses the double curly braces of interporlation
	(a kind of one-way data binding) to display the app title and properties
	of a Hero object

	We wrote a multi-line template using template string to make it readable

	We can both display and change the hero's name after adding a two-way
	data binding to the <input> element using the built-in ngModel directive

	The ngModel directive also propagates changes to every other binding of 
	the hero.name
*/
