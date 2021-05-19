import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalDataService {

  constructor(private http: HttpClient) { }


  submitData(file : any): Observable<any>{
   
    return this.http.post("http://localhost:3000/POST/hospitals",file
    );
  }

  getData(){
    return this.http.get('http://localhost:3000/GET/hospitals');
  }
}
