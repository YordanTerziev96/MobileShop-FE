import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/users.service';
import { GlobalVariable } from '../global_variable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalVariable]
})
export class LoginComponent implements OnInit {

  user: User;
  returnedText: string;
  isSuccessful: boolean;
  visualize: boolean;
  userId: number;
  tmpLoggedIn: any;
  constructor(private userService: UserService, public globalVariable: GlobalVariable) {
    this.user = new User();
  }

  ngOnInit() {
    this.isSuccessful = false;
    this.visualize = false;
    this.tmpLoggedIn = localStorage.getItem('isLoggedIn');
  }

  login() {
    this.userService.login(this.user).subscribe(
    data => {
      this.isSuccessful = true;
      this.visualize = false;
      this.globalVariable.isSUCCC = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.tmpLoggedIn = localStorage.getItem('isLoggedIn');
      // tslint:disable-next-line:radix
      this.userId = parseInt(data);
      // tslint:disable-next-line:radix
      console.log(parseInt(data));
    },
    (err) => {
        console.log(err.error.text);
        this.returnedText = err.error.text;
        if (err.error.text === 'Wrong username!' || err.error.text === 'Wrong password!') {
            this.visualize = true;
            this.isSuccessful = false;
            this.globalVariable.isSUCCC = false;
            localStorage.setItem('isLoggedIn', 'false');
            this.tmpLoggedIn = localStorage.getItem('isLoggedIn');
            console.log(this.isSuccessful);
        } else {
          this.globalVariable.isSUCCC = true;
          this.visualize = false;
        }
    });
  }
}
