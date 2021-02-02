import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/app.api';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string){
    //post será nessa URL
     return this.http.post(`${API}/user/login`,{userName, password});

    
   

  }

}
