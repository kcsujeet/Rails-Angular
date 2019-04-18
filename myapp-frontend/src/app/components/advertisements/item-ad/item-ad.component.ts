import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ad-item',
  templateUrl: './item-ad.component.html',
  styleUrls: ['./item-ad.component.scss']
})
export class ItemAdComponent implements OnInit {
  @Input() advertisement;
  constructor() { }

  ngOnInit() {
  }

}
