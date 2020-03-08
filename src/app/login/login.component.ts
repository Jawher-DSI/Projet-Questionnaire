import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  authStatus: boolean;
  constructor(private loginservice :LoginService ) {}

  onSignIn(utilisateur,motdepasse) {
  this.loginservice.login(utilisateur,motdepasse);
  };

}
