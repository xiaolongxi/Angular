import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";

import {HeroService} from "./hero.service";
import {HeroRouting} from "./hero.routing"; 

@NgModule({
	imports:[
		CommonModule,
		FormsModule,
		HeroRouting
	],
	declarations:[
		HeroListComponent,
		HeroDetailComponent
	],
	providers:[
		HeroService
	]
})


export class HeroesModule{

}