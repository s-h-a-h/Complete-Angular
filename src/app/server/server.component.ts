import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
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
  status1 = this.isActive(this.name1);
  status2 = this.isActive(this.name2);
  status3 = this.isActive(this.name3);
  toggleStatus = () => {
    if (this.status1 === true) {
      this.status1 = false;
    } else {
      this.status1 = true;
    }
    if (this.status2 === true) {
      this.status2 = false;
    } else {
      this.status2 = true;
    }
    if (this.status3 === true) {
      this.status3 = false;
    } else {
      this.status3 = true;
    }
  }
}
