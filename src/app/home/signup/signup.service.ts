import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/app.api';
import { NewUser } from './new-user.model';

@Injectable()
export class SignupService {

  constructor(private http : HttpClient) { }

  checkUserNameTaken(userName:string){

    return this.http.get(`${API}/user/exists/${userName}`);

  }

  signup(newUser: NewUser){
    return this.http.post(`${API}/user/signup`, newUser)
  }

}
