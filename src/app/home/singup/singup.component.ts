import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  selector: 'ap-singup',
  templateUrl: './singup.component.html'
  
})
export class SingUpComponent implements OnInit {

  singupForm: FormGroup;


  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.singupForm = this.fb.group({
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
      userName:['', 
        [Validators.required,
         lowerCaseValidator,
         Validators.minLength(2),
         Validators.maxLength(20)]],

      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)        
      ]]

    });

  }

}
