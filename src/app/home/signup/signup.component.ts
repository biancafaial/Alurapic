import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user.model';
import { SignupService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
  
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>


  constructor(
    private fb : FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', 
        [
        Validators.required, 
        Validators.email
        ]
      ],
      fullName: ['', 
      [
        Validators.required, 
        Validators.minLength(4),
        Validators.maxLength(40)
      ]
      ],
      userName:
      ['', 

        [Validators.required,
         lowerCaseValidator,
         Validators.minLength(2),
         Validators.maxLength(20)],

        this.userNotTakenValidatorService.checkUserNameTaken()
        
        ],


      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)        
      ]]

    });

    this.platformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();

  }

  signup(){
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
      .signup(newUser)
      .subscribe(() => this.router.navigate([''])),
      err => console.log(err)
    
  }

}
