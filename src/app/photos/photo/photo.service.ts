import { HttpBackend, HttpClient } from "@angular/common/http"; 

const API ='http://localhost:3000/flavio/photos';

export class PhotoService{


    constructor(private http: HttpClient){}
    
    listFromUser(userName){
   
        this.http
        .get<Object[]>(API + '/flavio/photos');
       
      
    }
}