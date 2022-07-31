import {Component, Input} from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'product',
    template: `
        <div class="media">
            <img  src="{{ data.imageUrl }}" class="mr-3" (click)="onClick(data)" alt="..." style="width:150px;height:150px;">
            <div class="media-body">
                <h5 class="mt-0">{{ data.productName }}</h5>
                {{ data.releasedDate }}
                <rating 
                    [rating]="data.rating" 
                    [numOfReviews]="data.numOfReviews">
                </rating> <br>                                            
                {{ data.description }} <br>
                Colours:{{ data.colours }} <br>
                <h5 class="mt-0">{{ data.price }}</h5> <br>
                <div class="alrt"
                *ngIf="!data.instock">
                Out of stock
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