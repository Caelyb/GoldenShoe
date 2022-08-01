import {Component, Input} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'product',
    template: `
        <div class="media">
            <img  src="{{ data.imageUrl }}" class="mr-3" (click)="onClick(data)" alt="..." style="width:240px;height:240px;">
            <div class="media-body">
                <h5 class="mt-0">{{ data.productName }}</h5>
                Release date: {{ data.releasedDate }} <br>
                <rating 
                    [rating]="data.rating" 
                    [numOfReviews]="data.numOfReviews">
                </rating> <br>                                            
                {{ data.description }} <br>
                <b> Colours:{{ data.colours }} </b> <br>
                <b> Sizes available: {{ data.sizes }} </b>
                <h5 class="mt-0">{{ data.price }}</h5> 
                <button class="button_maroon" (click)="onClick(data)"> View Product </button>
                <br>
                <div class="alrt"
                *ngIf="!data.instock">
                <b> Out of stock </b>
            </div>    
            </div>
        </div>    
    `,
    styles: [` 

        .alrt{
            color: red
        }
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

    `]    
})


export class ProductComponent {
    constructor(private _router: Router){
    }
    @Input() data: any; 

    onClick(data:any){
        console.log(data)
        var item: string = "item/"
        var id: string = data.id
        this._router.navigate([item.concat(id)]);
    }

}
