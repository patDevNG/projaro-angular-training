import { Component, OnInit } from '@angular/core';
// import { Cookie } from "ng2-cookies/ng2-cookies";

import { AppService } from "./../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../app.component.css']
})

export class LoginComponent implements OnInit {

  user: any = {};
  test_data: string = "";
  disable: boolean = false;
  loading: boolean = false;
  error: any = {
    validate: false,
    msg: "",
    type: ""
  }

  constructor(
    private _appservice: AppService
  ) { }

  ngOnInit() {
  }

  /*
    Method: @login
    Purpose: Authenticating users
  */
  login(data) {
  }

}
