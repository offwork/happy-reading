import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'happy-dashboard',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  tabs = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'profile', label: 'Profile' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
