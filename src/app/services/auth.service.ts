import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL ="http://localhost:5000/auth";
  constructor(private http: HttpClient) { }

  register(data:any): Observable<any> {
    return this.http.post(this.URL + '/register', data, httpOptions);
  }
  login(data:any): Observable<any> {
    return this.http.post(this.URL + '/login', data, httpOptions);
  }
}
