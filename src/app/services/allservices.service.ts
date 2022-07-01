import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AllservicesService {
  URL = "http://localhost:5000/link";
  constructor(private http: HttpClient) { }

  shortlink(data: any): Observable<any> {
    return this.http.post(this.URL + '/shortlink', data, httpOptions);
  }


  getlink(body: any): Observable<any> {
    return this.http.post(this.URL + '/getlink/', body);
  }
  getlogs(): Observable<any> {
    return this.http.get(this.URL + '/logs/');
  }

  getIPAddress(): Observable<any> {
   return this.http.get("http://api.ipify.org/?format=json")
  }
  getPays() : Observable<any>{
    return this.http.get("https://extreme-ip-lookup.com/json")
   }
  getlinks(email:any): Observable<any>{
    return this.http.get(this.URL + '/mylinks/'+ email)
  }
  deletelink(id:any): Observable<any>{
    return this.http.delete(this.URL + '/deletelink/'+ id)
  }

}
