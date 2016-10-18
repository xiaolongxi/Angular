import { Component } from "@angular/core";
import { Router,NavigationExtras} from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
	template:`
		<h2>LOGIN</h2>
		<p>{{message}}</p>
		<p>
			<button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
			<button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
		</p>

	`
})

export class LoginComponent{
	message:string;
	constructor(public authService:AuthService,public router:Router){
		this.setMessage();
	};
	setMessage(){
		this.message = 'Logged'+(this.authService.isLoggedIn?'In':'Out');
	};
	login(){
		this.message = 'Irying to log in...';
		this.authService.login().subscribe(()=>{
				this.setMessage();
				if(this.authService.isLoggedIn){
					let redirect = this.authService.redirectUrl?this.authService.redirectUrl:'/crisis-center/admin';
		
					let navigationExtras:NavigationExtras = {
						preserveQueryParams:true,
						preserveFragment:true,
					}
					this.router.navigate([redirect],navigationExtras)

				}
			})
	};
	logout(){
		this.setMessage();
		this.authService.logout()
	}
}