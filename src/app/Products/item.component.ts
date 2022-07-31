import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "item.html",
  styles: [`
    .phill {
        height:600px;
    }
  `]
})
export class ItemComponent {
  reasons = ['Brown', 'BlackS'];

}