import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'main-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'main-app';

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(`666`);
    this.verifyLogin();
  }

  verifyLogin() {
    const token = window.localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["/main/login"]);
    }
  }
}
