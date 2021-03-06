import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";

@Component({
	template:`
		<h3>CRISES ADMINISTRATION</h3>
		<p>Manage your crises here</p>
		<p>Session ID:{{sessionId|async}}</p>
		<a id="anchor"></a>
		<p>Token:{{token|async}}</p>
	`
})
export class CrisisAdminComponent implements OnInit{
	sessionId:Observable<string>;
	token:Observable<string>;

	constructor(private route:ActivatedRoute){}
	ngOnInit(){
		this.sessionId = this.route.queryParams.map(params =>params["session_id"]||"None");
		this.token = this.route.fragment.map(fragment => fragment||"None");
	}

}