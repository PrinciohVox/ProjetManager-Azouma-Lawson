import { environment } from './../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient,
    private storage:SessionStorageService
  ) { }

  _getUsers(status)
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token'),
      status: status
    })

    if(status == 'non-actifs')
      return this.http.get(`${environment.apiUrl}/api/users/noactifs`, { headers })
    else
      return this.http.get(`${environment.apiUrl}/api/users/actifs`, { headers })
  }

  _getAllUsers()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token'),
    })

      return this.http.get(`${environment.apiUrl}/api/users`, { headers })

  }

  _createUser(data)
 {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'Bearer '+ this.storage.retrieve('access_token')
  })

  return this.http.post(`${environment.apiUrl}/api/users`,data,{ headers })
 }

 _DeleteUser(userId)
 {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'Bearer '+ this.storage.retrieve('access_token')
  })

  return this.http.delete(`${environment.apiUrl}/api/users/${userId}`,{ headers })
 }

 _illuminateUser(userId,data)
 {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    });

    return this.http.put(`${environment.apiUrl}/api/users/activate/${userId}`,data,{ headers })
 }

}
