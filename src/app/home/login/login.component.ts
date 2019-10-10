import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AuthService } from 'src/app/core/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
  //styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router:Router)
   { 
    }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          userName: ["" , Validators.required],
          password: ["", Validators.required]

      });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
    .authenticate(userName, password)
    .subscribe(
      () => this.router.navigate(['user', userName]),
      err => {
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
          alert("Usuário ou senha inválidos");
          });
      }
    

  limpar() {
    this.loginForm.reset();
  }

}