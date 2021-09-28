import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesterService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return <Observable<any>> this.http.get(`http://localhost:3080/test`);
  }

  loadDatabse(): Observable<any>{
    return <Observable<any>> this.http.get(`http://localhost:3080/setupDb`,{responseType:"text"});
  }
}
