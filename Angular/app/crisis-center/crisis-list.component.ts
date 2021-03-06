import {Component,OnInit,OnDestroy} from "@angular/core";
import {Router,ActivatedRoute} from "@angular/router";

import {Crisis,CrisisService} from "./crisis.service";
import {Subscription} from "rxjs/Subscription";

@Component({
	template:`
		<ul class="items">
			<li *ngFor="let crisis of crises"
				[class.selected]="isSelected(crisis)"
				(click)="onSelect(crisis)"
			>
				<span class="badge">{{crisis.id}}</span>{{crisis.name}}
			</li>
		</ul>
	`
})

export class CrisisListComponent implements OnInit,OnDestroy{
	crises:Crisis[];
	private selectedId:number;
	private sub:Subscription;

	constructor(private service:CrisisService,private router:Router,private route:ActivatedRoute){

	}

	isSelected(crisis:Crisis){
		return crisis.id === this.selectedId;
	}
	ngOnInit(){
		this.sub = this.route.params.subscribe(params => {
			this.selectedId = +params["id"];
			this.service.getCrises().then(crises => this.crises = crises);
			})
	};


	ngOnDestroy(){
		if(this.sub){
			this.sub.unsubscribe();
		}
	};
	onSelect(crisis:Crisis){
		this.router.navigate(["/crisis-center",crisis.id]);
	}
}