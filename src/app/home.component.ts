import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    template: `  
      <h1>Welcome to the Golden Shoe home page!</h1>
        <button class="button_maroon" (click)="onClick()"> Contact Us </button>
        <button class="button_maroon" (click)="logOut()"> Login here </button>
        <products></products>
        `,
    styles: [` 
    .media {
        margin-bottom: 20px;
    } 
    .button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    
    .button_maroon {background-color: maroon; color: white;}
    .img { max-width: 50px;
           max-height: 50px; }
`]  

})

export class HomeComponent{
    constructor(private _router: Router){
    }
    
    onClick(){
        this._router.navigate(['enquiry']);
    }

    logOut(){
        this._router.navigate(['login']);
        // this just sends them back to login
        // could be extended to actually log out user with more time
    }
}