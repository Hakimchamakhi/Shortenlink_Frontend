import { Component, OnInit } from '@angular/core';
import { AllservicesService } from 'src/app/services/allservices.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logsdata:any;
  constructor(private service: AllservicesService) { }

  ngOnInit(): void {



      this.service.getlogs().subscribe(data=>{
      this.logsdata = data.logs;
    })

  }

}
