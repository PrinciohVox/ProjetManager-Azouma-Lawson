import { UsersService } from './../services/users.service';
import { XbetService } from './../services/xbet.service';
import { ExchangeService } from './../services/exchange.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  exchangesNumber:any;
  xbetNumber:any;
  userNumber:any;

  fetchedData:any;

  constructor(
      private exchange: ExchangeService,
      private xbet: XbetService,
      private userS: UsersService
  ) {



  }

  ngOnInit(): void
  {

  }

}
