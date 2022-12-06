import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent {
  serverName = "";
  serverCreated = false;
  onClick = () => {
    if (this.serverName.length > 0) {
      this.serverCreated = true;
    }
  }
}
