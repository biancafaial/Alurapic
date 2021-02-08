import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { LoginComponent } from "./home/login/login.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { SingUpComponent } from "./home/singup/singup.component";

const routes: Routes = [

    {  
        path: '', 
        component: LoginComponent,
        canActivate: [AuthGuard]
     },

     {  
         path: 'singup', 
         component: SingUpComponent,
     },

    {
        path: 'user/:userName',
        component: PhotoListComponent,
        resolve:{
            photos: PhotoListResolver
        } 
    },

    { 
        path: 'p/add', 
        component: PhotoFormComponent 
    },

    { 
        path: '**', 
        component: NotFoundComponent
     }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}