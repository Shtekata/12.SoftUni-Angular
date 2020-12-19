import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { ThemeComponent } from './theme/theme.component';

// const routes: Routes = [
//     {
//         path: 'theme',
//         component: ThemeComponent,
//         data: {
//             title: 'THEME'
//         }
//     },
//     {
//         path: 'theme/new',
//         component: NewComponent,
//         canActivate: [AuthGuard],
//         data: {
//             title: 'NEW THEME',
//             isLogged: true
//         }
//     },
//     {
//         path: 'theme/detail/:id',
//         component: DetailComponent,
//         data: {
//             title: 'THEME DETAIL'
//         }
//     }
// ];
const routes: Routes = [
    {
        path: 'theme',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemeComponent,
                data: {
                    title: 'THEME'
                }
            },
            {
                path: 'new',
                component: NewComponent,
                data: {
                    title: 'NEW THEME',
                    isLogged: true
                }
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
                data: {
                    title: 'THEME DETAIL'
                }
            }
        ]
    }
];
export const ThemeRouterModule = RouterModule.forChild(routes);
