import {  HttpClient, HttpParams } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { API } from "src/app/app.api";
import { PhotoComment } from "./photo-comment";
import { Photo } from "./photo.model";


@Injectable({ providedIn: 'root'})
export class PhotoService{


    constructor(private http: HttpClient){}
    
    listFromUser(userName: string){
        return this.http
        .get<Photo[]>(`${API}/${userName}/photos`);
       
      
    }
    listFromUserPaginated(userName: string, page: number){
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`, { params });
       
      
    }

    upload(description: string, allowComments: boolean, file: File){
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile' , file);

        return this.http.post(API + '/photos/upload', formData);

    }

    findById(photoId: number){
        return this.http.get<Photo>(API + '/photos/' + photoId);
    }

    getComments(photoId : Number){
        return this.http.get<PhotoComment[]>(
            API + '/photos/' + photoId + '/comments');
    }
}