import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent {
  serverStatus = "offline";

  serverName = "";
  serverCreated = false;

  onClick = () => {
    if (this.serverName.length > 0) {
      this.serverCreated = true;
    }
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "ofline";
  }

  getServerStatus = () => {
    return this.serverStatus;
  }

  getColor = () => {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
