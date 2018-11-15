import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const service_base = 'https://projaro-training-api.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /*
    Method: @register
    Purpose: Register new user
  */
  register(data) {
    return this.http.post(`${service_base}api/user`, data)
  }

  /*
    Method: @login
    Purpose: Authenticating users
  */
  login(data) {
    return this.http.post(`${service_base}api/user/login`, data)
  }
}
