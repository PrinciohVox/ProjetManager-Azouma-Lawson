import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {

  constructor(
    private auth0:AuthService,
    private route:Router
  ) {

  //  this.auth0._checkLoggedIn()
   // .subscribe(
    //  ()=>{
//
     // },
      //()=>{
        //this.route.navigateByUrl('/');
   // }
    //)
  }

  ngOnInit(): void {
  }

}
