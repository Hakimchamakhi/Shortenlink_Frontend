import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:any;
  password:any;
  constructor(private authservice: AuthService) { }
  register(){
    const body = {email:this.email, password: this.password}
    this.authservice.register(body).subscribe(data=>{
      localStorage.setItem("token",data.token)
      localStorage.setItem("email",data.user.email)
      window.location.replace("/")
    })
  }

  ngOnInit(): void {
  }

}
