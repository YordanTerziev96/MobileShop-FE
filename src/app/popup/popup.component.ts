import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popupp',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('imagesrc') imagesrc: string;
  constructor() { }

  ngOnInit() {
  }

}
