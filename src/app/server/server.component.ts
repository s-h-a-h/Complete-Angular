import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  name1 = "nginx";
  name2= "Apache";
  name3 = "cloudflare";
  isActive = (serverName: string): boolean => {
    if (serverName === "nginx" || serverName === "cloudflare") {
      return false;
    } else {
      return true;
    }
  }
}
