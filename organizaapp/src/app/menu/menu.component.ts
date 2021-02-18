import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu () {
    var sidebar = document.querySelector('#sidebar');
    var collapseIn = document.querySelector('.collapse.in');
    sidebar?.toggleAttribute('activate', true);
    collapseIn?.toggleAttribute('in');
  }
}
