import { environment } from './../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarificationsService {

  constructor(
      private http: HttpClient,
      private storage: SessionStorageService
  ) { }


    _getTarifications()
    {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.get(`${environment.apiUrl}/api/tarifications`, { headers })
    }

    _deleteTarification(id)
    {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.delete(`${environment.apiUrl}/api/tarifications/${id}`, { headers })
    }


    _updateTarification(id,newData)
    {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.put(`${environment.apiUrl}/api/tarifications/${id}`, newData,{ headers })
    }

    _createTarification(newData)
    {
      const headers = new HttpHeaders({
        'content-type': 'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.post(`${environment.apiUrl}/api/tarifications`, newData,{ headers })
    }

    _addImg(imgData,id)
    {
      const headers = new HttpHeaders({
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.put(`${environment.apiUrl}/api/tarifications/admin/addimage/${id}`, imgData,{ headers })
    }

    _updateExchangeRate(id,data)
    {
      const headers = new HttpHeaders({
        'content-type':'application/json',
        authorization: 'Bearer '+ this.storage.retrieve('access_token')
      })

      return this.http.post(`${environment.apiUrl}/api/tarifications/admin/exchangeRate/${id}`,data, { headers })
    } 
}
