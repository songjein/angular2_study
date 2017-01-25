import { Component } from '@angular/core';

@Component({
	// to enable moudle-relative file URLs...
	moduleId: module.id,
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app.component.css'],
})

export class AppComponent{
	title = 'Tour of Heroes';
}

/**
* The 'AppComponent' is now attached to a router and displaying routed views
* For this reason and to distinguish it from other kinds of component,
* WE call this type of component 'a Router Component'
*
*/

/**
* We added the angular Router to navigate among different components
* We learned how to create router links to represents nav menu items
* We used router link params to navigate to the details of user selected hero
* We shared the HeroService among multiple components
* We refactored routes into a Routing Module that we import
*
*/
