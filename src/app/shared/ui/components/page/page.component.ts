import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'happy-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() icon: string;
  @Input() tabs;
  @Input() tabsVisible: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
