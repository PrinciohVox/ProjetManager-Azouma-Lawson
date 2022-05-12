import { AuthService } from './../services/auth.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login="";
  password="";
  tokenInfo:any;

  constructor(
    private route:Router,
    private auth0: AuthService,
    private storage:SessionStorageService,
    private spinner:NgxSpinnerService
  ) {

    //if(this.storage.retrieve('access_token'))
    //{
      //this.auth0._checkLoggedIn()
      //.subscribe(
       // ()=>{
        //  route.navigateByUrl('/home')
       // }
     // )
   // }
  }

  ngOnInit(): void {

    document.addEventListener('keyup',e=>{
      if(e.keyCode === 13)
        this._login();
    })

  }

  _login()
  {
    this.route.navigateByUrl('/home');

    return;
    this.spinner.show();
    if(this.login!="" && this.password!="")
    {
      let data ={
        email:this.login,
        password:this.password
      }
      this.auth0._login(data)
      .subscribe(
        (token)=>{
          this.spinner.hide();
          this.tokenInfo = token;
          this.storage.store('access_token',this.tokenInfo.token);
          Swal.fire({
            icon:'success',
            title:'Authentification réussie'
          }).then( res=>{
            if(res.isConfirmed || res.isDismissed)
              console.clear();
          } );
          this.route.navigateByUrl('/home');
        },
        (error)=>{
          this.spinner.hide();
          Swal.fire({
            icon:'error',
            title:'Echec d\'Authentification'
          });
          console.log(error)
        }
      );
    }
    else
    {
      this.spinner.hide();
      Swal.fire({
        icon:'error',
        title:'Veuillez renseigner tous les champs !'
      });
    }
  }

}
