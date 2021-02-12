import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../core/auth/auth.guard";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./signup/signup.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },

    {  
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
        ]
     }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class HomeRoutingModule{

}