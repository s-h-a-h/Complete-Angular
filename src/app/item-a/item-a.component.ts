import { Component } from '@angular/core';

@Component({
  selector: 'app-item-a',
  templateUrl: './item-a.component.html',
  styleUrls: ['./item-a.component.css']
})
export class ItemAComponent {
  name = "ItemAComponent";
  whichColor = (): string => {
    return "Dark Orchid"
  }
}
