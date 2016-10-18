import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";

const heroRoutes:Routes = [
	{path:'heroes',component:HeroListComponent},
	{path:'hero/:id',component:HeroDetailComponent}
]

export const HeroRouting:ModuleWithProviders = RouterModule.forChild(heroRoutes);

