import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverStatus: boolean = false;
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? true : false;
  }
  isActive = (serverName: string): boolean => {
    if (serverName === "nginx" || serverName === "cloudflare") {
      return false;
    } else {
      return true;
    }
  }
  name1 = "nginx";
  name2 = "Apache";
  name3 = "cloudflare";

  getServerStatus = (): boolean=> {
    return this.serverStatus;
  }

  getColor = () => {
    return this.serverStatus === true ? "green" : "red";
  }
  // toggleStatus = () => {
  //   if (this.status1 === true) {
  //     this.status1 = false;
  //   } else {
  //     this.status1 = true;
  //   }
  //   if (this.status2 === true) {
  //     this.status2 = false;
  //   } else {
  //     this.status2 = true;
  //   }
  //   if (this.status3 === true) {
  //     this.status3 = false;
  //   } else {
  //     this.status3 = true;
  //   }
  // }
}
