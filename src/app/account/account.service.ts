import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { User } from './account.user';

@Injectable()
export class AccountService {

    user: User = {
        username: "",
        password: "",
        token: ""
      };

    constructor ( private router: Router, private http: Http) 
    {

    }

    public login(username: string, password: string): void 
    {
        let url = 'http://filbrokerwebsite-priland.azurewebsites.net/token';
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers })
    
        this.http.post(url, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('username', response.json().userName);
                
                this.router.navigate(['/account/login']);
            },
            error => {
                localStorage.setItem('access_token', "Error loggin-in");
            }
        )
    }
}


