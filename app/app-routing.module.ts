// http://devdocs.io/angular~2_typescript/guide/router#activated-route

import { NgModule }	from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: 'heroes', component: HeroesComponent }
];

/**
* The 'Routes' are an array of route definitions.
*
* 'route definition' has the following parts
* path : the router matches this route's path to the URL in the browser addr bar
* name : the official name of the route; it must begin with a capital letter to
* avoid confusion witt the path(Heroes)
* component : the component that the router should create when navigation
* to this route(HeroesComponent)
*
* 'forRoot' method : we're providing a configured router at the root of the app.
* The 'forRoot' method gives us the 'Router service providers and directives' 
* needed for routing, and performs the initial navigation based on the current
* browser URL
*/

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

/**
*  - Pulls the routes into a variable. You might export it in the future and
* 	it clarifies the Routing Module pattern
*	 - Adds RouterModule.forRoot(routes) to imports
*  - Adds RouterModule to exports so that the components in the companion
*   module have access to Router declarables such as RouterLink and RouterOutlet
*  - No declarations! it is the responsiblility of the companion module
*  - Adds module providers for guard services if you have them 
*/

