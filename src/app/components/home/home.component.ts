import { Component, OnInit } from '@angular/core';
import { AllservicesService } from 'src/app/services/allservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  oldlink:any;
  shortedlink:any;
  token:any=localStorage.getItem('token')
  constructor(private service : AllservicesService) { }
  shortlink(){
    if(!this.token){
      window.location.replace('register')
    }
    const body ={old_link:this.oldlink, user_email:localStorage.getItem("email")}
    this.service.shortlink(body).subscribe(data=>{
      if (data.shortedlink.success){
        this.shortedlink=data.shortedlink.shorted_link;
      }
      else{
        alert(data.shortedlink.message)
      }
    })
  }
  ngOnInit(): void {
  }

}
