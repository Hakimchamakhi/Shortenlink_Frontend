import { Component, OnInit } from '@angular/core';
import { AllservicesService } from 'src/app/services/allservices.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  links:any;
  constructor(private service: AllservicesService) { }
  delete(id:any){
    this.service.deletelink(id).subscribe(data=>{
      this.service.getlinks(localStorage.getItem('email')).subscribe(data=>{
        this.links = data.links;
      })
    })
  }
  ngOnInit(): void {
    this.service.getlinks(localStorage.getItem('email')).subscribe(data=>{
      this.links = data.links;
    })
  }

}
