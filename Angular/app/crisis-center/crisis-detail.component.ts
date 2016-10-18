import {Component,OnInit} from "@angular/core";
import {Router,ActivatedRoute} from "@angular/router";

import {Crisis} from "./crisis.service";
import {DialogService} from "../dialog.service";
import {Observable} from "rxjs/Observable";

@Component({
	template:`
		<div *ngIf="crisis">
			<h3>"{{editName}}"</h3>
			<div>
				<label for="">id:</label>{{crisis.id}}
			</div>
			<div>
				<label for="">name:</label>
				<input type="text" placeholder="name" [(ngModel)]="editName">
			</div>
			<p>
				<button (click)="save()">Save</button>
				<button (click)="cancel()">cancel</button>
			</p>
		</div>
	`,
	styles:['input{width:20em}']
})

export class CrisisDetailComponent implements OnInit{
	crisis:Crisis;
	editName:string;
	constructor(private router:Router,private route:ActivatedRoute,private dialogService:DialogService){

	}
	ngOnInit(){
		this.route.data.forEach((data:{crisis:Crisis})=>{
			this.editName = data.crisis.name;
			this.crisis = data.crisis;
			})
	};
	save(){
		this.crisis.name = this.editName;
		this.gotoCrises();
	};
	cancel(){
		this.gotoCrises();
	};
	canDeactivate():Observable<boolean>|Promise<boolean>|boolean{
		if(!this.crisis||this.crisis.name === this.editName){
			return true;
		}
		return this.dialogService.confirm("Discard changer?");
	};

	gotoCrises(){
		let crisisId = this.crisis ? this.crisis.id:null;
		this.router.navigate(['/crisis-center',{id:crisisId,foo:"foo"}]);
	};

}

