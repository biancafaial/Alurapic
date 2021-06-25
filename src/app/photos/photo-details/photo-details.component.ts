import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { Photo } from '../photo/photo.model';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
  
})
export class PhotoDetailsComponent implements OnInit {

  
  photo$: Observable<Photo>;
  photoId: number;


  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService : AlertService,
    private userService: UserService
    ) {

   }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
      
  }

  remove() {
    this.photoService
        .removePhoto(this.photoId)
        .subscribe(() => {
          this.alertService.success('Foto removida', true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
          err => {
            console.log(err);
            this.alertService.warning('Erro ao remover a foto!', true);
          }
        );
  }

}
