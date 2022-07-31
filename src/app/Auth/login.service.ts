import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router'

@Injectable()
export class LoginService {
    isLoggedIn = false;

    loginsrv(username:any, password:any) {
        if(username === "Caelyb" && password ==="1234")
            this.isLoggedIn = true;
            // this._router.navigate(['']);

        else
            this.isLoggedIn = false;

        return this.isLoggedIn;
    }
    
    logout(){
        this.isLoggedIn = false;
        return this.isLoggedIn;
    }
}