import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  // 1. String Interpolation
  timeStatus = "Good morning 😊";
  userName = "Shah"

  getUserName = (): string => {
    return "Saifeen"
  }
  getTimeStatus = (): string => {
    return "Good night 😊"
  }
  // 2. Property binding

  isDisable = true;
  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 2000);
  }
  // 3. Event binding
  text = "";
  onClick = (): void => {
    this.text = "Clicked";
  }
  inputText = "";
  onInput = (event: Event) => {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
  // 4. Two way
  twoWay = "Halluuuuu";
}
