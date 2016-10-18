import {Component,OnInit,OnDestroy} from "@angular/core";
import {Router,ActivatedRoute} from "@angular/router";

import {Hero,HeroService} from "./hero.service";
import {Subscription} from "rxjs/Subscription";

@Component({
	template:`
		<h2>HEROES</h2>
		<div *ngIf="hero">
			<h3>"{{hero.name}}"</h3>
			<div>
				<label for="">id:</label>{{hero.id}}
			</div>
			<div>
				<label for="">name:</label>
				<input type="text" placeholder="name" [(ngModel)]="hero.name">
			</div>
			<p>
				<button (click)="gotoHeroes()">Back</button>
			</p>
		</div>
	`
})

export class HeroDetailComponent implements OnInit,OnDestroy{
	hero:Hero;
	private sub:Subscription;
	constructor(private service:HeroService,private route:ActivatedRoute,private router:Router){}
	ngOnInit(){
		this.sub = this.route.params.subscribe(params =>{
			let id = +params["id"];
			this.service.getHero(id).then(hero =>this.hero = hero);
			})
	};

	ngOnDestroy(){
		this.sub.unsubscribe();
	};
	gotoHeroes(){
		let heroId = this.hero?this.hero.id:null;
		this.router.navigate(['/heroes',{id:heroId,foo:'foo'}]);
	}
}