import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "../core/auth/login.guard";
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
        canActivate: [LoginGuard],
        children: [
            { 
                path: '', 
                component: LoginComponent,
                data: {
                    title:'Login'
                }
            },
            { 
                path: 'signup', 
                component: SignUpComponent,
                data: {
                    title:'Logout'
                }
            },
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