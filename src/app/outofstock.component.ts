import { Component } from '@angular/core';

@Component({
    template: `
    <h1> Unfortunately this product is out of Stock right now</h1>
    <div class="phill"></div>
    `,
    styles: [`
    .phill {
        height: 550px;
      }
      `],
    providers: []
})

export class OutOfStockComponent { }