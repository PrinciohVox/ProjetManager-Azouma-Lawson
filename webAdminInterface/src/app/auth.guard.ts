import { SessionStorageService } from 'ngx-webstorage';
import  Swal  from 'sweetalert2';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authO: AuthService,
    private route: Router,
    private storage: SessionStorageService
  )
  {

  }

  canActivate():boolean
  {
    // let response;

    // this.authO._checkLoggedIn()
    // .subscribe(
    //   (data)=>{
    //     response = true ;
    //     console.log(data)
    //   },
    //   ()=>{
    //       response = false;
    //   }
    // );

    // if(response == false)
        // Swal.fire({
        //   icon:'error',
        //   title: 'Veuillez vous authentifier'
        // }).then((result) =>
        // {
        //   if(result.isConfirmed || result.isDismissed)
        //     this.route.navigateByUrl('/')
        // });
    // if(response == true)
    // {
    //   this.route.navigateByUrl('/home')
    //   return true;
    // }
    if(this.storage.retrieve('access_token'))
      return true
    else
    {
      Swal.fire({
        icon:'error',
        title: 'Veuillez vous authentifier'
      }).then((result) =>
      {
        if(result.isConfirmed || result.isDismissed)
          this.route.navigateByUrl('/')
      });
      return false
    }
  }
}
