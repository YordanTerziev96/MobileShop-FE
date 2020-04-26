import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;
  returnedText: string;
  isDone: boolean;
  visualize: boolean;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.isDone = false;
    this.visualize = false;
  }

  onRegister() {
      this.userService.register(this.user).subscribe(
      data => {
        console.log(data);
      },
      (err) => {
          console.log(err.error.text);
          if (err.error.text === 'Success') {
            this.isDone = true;
            this.visualize = false;
          }
          if (err.error.text === 'This username already exists!') {
              this.visualize = true;
              this.isDone = false;
              this.returnedText = err.error.text;
          }
      });
  }

}
