import { environment } from './../../environments/environment';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) { }

  _createCoupon(data)
  {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    })

    return this.http.post(`${environment.apiUrl}/api/coupons`, data,{ headers })
  }


  _updateCoupon(data)
  {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    })

    return this.http.put(`${environment.apiUrl}/api/coupons/${data._id}`, data,{ headers })
  }

  _getCoupons()
  {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    })

    return this.http.get(`${environment.apiUrl}/api/coupons`, { headers })
  }

  _deleteCoupon(id)
  {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'Bearer '+ this.storage.retrieve('access_token')
    })

    return this.http.delete(`${environment.apiUrl}/api/coupons/${id}`, { headers })
  }
}
