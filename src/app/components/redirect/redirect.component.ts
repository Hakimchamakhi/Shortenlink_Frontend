import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from 'src/app/services/allservices.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  constructor(private service: AllservicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getIPAddress().subscribe(ip=>{
      this.service.getPays().subscribe(pays=>{
        console.log(pays)
        const body={id:this.route.snapshot.paramMap.get("id"), user_email:localStorage.getItem('email'), agent:window.navigator.userAgent, ip, pays:"tn"}
      this.service.getlink(body).subscribe(data=>{
      window.location.href=("http://www."+data.old_link)
      })
    })
    })

  }

}
