// Application root module
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [ 
		BrowserModule, 
		FormsModule,
		AppRoutingModule
	],

  declarations: [
		AppComponent, 
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent,
	],
	
	/**
	* a singleton HeroService instance
	*/
	providers: [
		HeroService	
	],
	// s3. We have to teach injector how to make a HeroService
	// by registering a HeroService 'provider'
	// providers: [HeroService]

	// s4. the providers array tells Angular to create a fresh instance
	// of the HeroService when it creates a new AppComponent
	// AppComponent can use that service to get heroes and so can every child
	// component of its component tree

  bootstrap: [ AppComponent ]
})
export class AppModule { }
