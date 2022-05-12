import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit {

  @Input() path;

  constructor() { }

  ngOnInit(): void 
  {
    
  }

}
