import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [AuthGuard],
        data: {
            isLogged: true,
            title: 'USER PROFILE'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
        data: {
            isLogged: false,
            title: 'USER LOGIN'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthGuard],
        data: {
            isLogged: false,
            noNavigation: true,
            title: 'REGISTER USER'
        }
    }
];

export const UserRoutingMogule = RouterModule.forChild(routes);
