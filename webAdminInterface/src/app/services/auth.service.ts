import { environment } from './../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) {


  }

  _login(login)
  {
    return this.http.post(`${environment.apiUrl}/auth/local/administration`,login)
  }

  _checkLoggedIn()
  {
    return true;
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization : "Bearer "+ this.storage.retrieve('access_token')
    })

    return this.http.get(`${environment.apiUrl}/api/users/me`, { headers })
  }
}
