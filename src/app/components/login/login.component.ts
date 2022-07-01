import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  constructor(private authservice: AuthService) { }
  login(){
    const body = {email:this.email, password: this.password}
    this.authservice.login(body).subscribe(data=>{
      localStorage.setItem("token",data.token)
      localStorage.setItem("email",data.user.email)
      window.location.replace("/")
    })
  }
  ngOnInit(): void {
  }

}
