import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';




@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(
    private http:HttpClient,
    private storage: SessionStorageService
  ) {



  }

  _getDemands()
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    })
    return this.http.get(`${environment.apiUrl}/api/exchanges`, { headers })
  }

 _createDemande(data)
 {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'Bearer '+ this.storage.retrieve('access_token')
  })

  return this.http.post(`${environment.apiUrl}/api/exchanges/add/admin`,data,{ headers })
 }

 _deleteDemande(idDemand)
 {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'Bearer '+ this.storage.retrieve('access_token')
  })

  return this.http.delete(`${environment.apiUrl}/api/exchanges/${idDemand}`,{ headers })
 }

 _updateDemand(idDemand,data)
 {
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'Bearer '+ this.storage.retrieve('access_token')
  })

  return this.http.put(`${environment.apiUrl}/api/exchanges/validate/${idDemand}`,data,{ headers })
 }

}
