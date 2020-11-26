import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';
import { ThemeComponent } from './theme/theme.component';
import { CoreModule } from '../core/core.module';
import { PostModule } from '../post/post.module';
import { HomeModule } from '../home/home.module';
import { ThemeRouterModule } from './theme-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PostModule,
    HomeModule,
    SharedModule,
    ThemeRouterModule
  ],
  providers: [ThemeService],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
    ThemeComponent
  ]
})
export class ThemeModule { }
