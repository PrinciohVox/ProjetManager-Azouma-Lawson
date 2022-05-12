import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private storage: SessionStorageService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  _logOut()
  {
    this.storage.clear('access_token');
    this.route.navigateByUrl('/')
  }
}
