import { Component } from "@angular/core";

@Component({
    selector: 'app-db',
    templateUrl: './db.component.html',
    styleUrls: ['./db.component.css']
})
export class DbComponent {
    userName = "Shah";
    clickAllowed = (): boolean => {
        if (this.userName.length == 0) {
            return false;
        } else {
            return true;
        }
    }
    onClick = () => {
        this.userName = "";
    }
}