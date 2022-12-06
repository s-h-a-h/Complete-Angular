import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  ServerName = "";
  allowNewServer = false;
  action = "MAKE ME SMILE";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  serverStatus = "Server is not yet created";
  onCreateServer = () => {
    this.serverStatus = `Server Created 😊. Server name is ${this.ServerName}`
  }
  emojiStatus = "";

  onClickStatusSmile = () => {
    this.emojiStatus = "😊";
    this.action = "Smiling...";
  }
  onClickStatusSad = () => {
    this.emojiStatus = "😞";
    this.action = "Sad...";

  }
  onClickStatusCry = () => {
    this.emojiStatus = "😢";
    this.action = "Crying...";

  }
  onClickStatusLaugh = () => {
    this.emojiStatus = "😂";
    this.action = "Laughing..";

  }
  onClickStatusWink = () => {
    this.emojiStatus = "😉";
    this.action = "Winking..";

  }
  onClickStatusHeart = () => {
    this.emojiStatus = "♥";
    this.action = "Love love..";

  }
  onClickStatusLike = () => {
    this.emojiStatus = "👍";
    this.action = "Liking..";

  }
  // onUpdateServerName = (event:any) => {
  //   this.ServerName = event.target.value;
  // }

  onUpdateServerName = (event: Event) => {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }
  
}
