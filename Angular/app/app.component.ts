import {Component} from "@angular/core";

@Component({
	selector:"my-app",
	template:`
		<h1 class="title">Component Router</h1>
		<nav>
			<a routerLink="/crisis-center" routerLinkActive="active" 
			[routerLinkActiveOptions]="{exact:true}">CrisisCenter</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
			<a routerLink="/crisis-center/admin" routerLinkActive="active">CrisisAdmin</a>
			<a routerLink="/login" routerLinkActive="active">Login</a>
		</nav>
	<router-outlet></router-outlet>
	`
})

export class AppComponent{

}

