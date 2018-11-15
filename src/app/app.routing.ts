import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';

// Routes
const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { title: "Login component" },
        // canActivate: [RouterGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }