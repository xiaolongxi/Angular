import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisAdminComponent} from "./crisis-admin.component";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";

import {CrisisService} from "./crisis.service";
import {CrisisDetailResolve} from "./crisis-detail-resolve.service";

import {crisisCenterRouting} from "./crisis-center.routing";

@NgModule({
	imports:[
		FormsModule,
		CommonModule,
		crisisCenterRouting
	],
	declarations:[
		CrisisAdminComponent,
		CrisisCenterComponent,
		CrisisDetailComponent,
		CrisisListComponent
	],
	providers:[
		CrisisService,
		CrisisDetailResolve
	]

})

export class CrisisCenterModule{

}