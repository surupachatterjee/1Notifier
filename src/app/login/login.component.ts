/**
 * Created by surajnagaraj on 11/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.userId === 'test' && this.password === 'password') {
      this.router.navigateByUrl('home');
    }
  }

}
