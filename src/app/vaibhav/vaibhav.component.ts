import { Component, OnInit } from '@angular/core';
import{color} from './list';
@Component({
  selector: 'app-vaibhav',
  templateUrl: './vaibhav.component.html',
  styleUrls: ['./vaibhav.component.css']
})
export class VaibhavComponent implements OnInit {

color = color,

  constructor() { }

  ngOnInit() {
  }

}
