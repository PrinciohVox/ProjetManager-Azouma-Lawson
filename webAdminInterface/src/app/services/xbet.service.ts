import { environment } from './../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XbetService {

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) { }


  _getDemands()
  {
      let headers = new HttpHeaders({
        'content-type' : 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      });

      return this.http.get(`${environment.apiUrl}/api/xbets`, { headers })
  }

  _updateDemand(id,data)
  {
      let headers = new HttpHeaders({
        'content-type' : 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      });

      return this.http.put(`${environment.apiUrl}/api/xbets/${id}`,data,{ headers })
  }

  _deleteDemand(id)
  {
      let headers = new HttpHeaders({
        'content-type' : 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      });

      return this.http.put(`${environment.apiUrl}/api/xbets/${id}`,{ isActive: false },{ headers })
  }

  _createDemande(newData)
  {

  }

}

