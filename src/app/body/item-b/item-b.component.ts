import { Component } from '@angular/core';

@Component({
  selector: 'app-item-b',
  templateUrl: './item-b.component.html',
  styleUrls: ['./item-b.component.css']
})
export class ItemBComponent {
  name = "ItemBComponent";
  whichColor = (): string => {
    return "Aqua";
  }
}
