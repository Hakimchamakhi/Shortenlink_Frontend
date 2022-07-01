import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any= localStorage.getItem("token")
  constructor() { }
  logout(){
    localStorage.clear()
    window.location.reload()
  }
  ngOnInit(): void {
  }

}
