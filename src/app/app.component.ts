import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mobile Shop';

  ngOnInit() {
    localStorage.setItem('isLoggedIn', 'false');
  }

}


