import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IThemeModuleState } from '../+store';
import { themeListClearThemeList, themeListLoadThemeList, themeListSetIsLoading, themeListSetThemeList } from '../+store/actions';
import { ITheme } from '../../shared/interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit, AfterViewInit, OnDestroy {

  // themeList: ITheme[];
  themeList$: Observable<ITheme[]> = this.store.select(x => x.theme.themeList.themeList);
  isLoading$: Observable<boolean> = this.store.select(x => x.theme.themeList.isLoading);

  constructor(private themeService: ThemeService, private store: Store<IThemeModuleState>) { }

  ngOnInit(): void {
    // this.themeService.loadThemeList().subscribe(x => { this.themeList = x; } );
    
    // this.store.dispatch(themeListSetIsLoading({ isLoading: true }));
    // this.themeService.loadThemeList().subscribe(x => this.store.dispatch(themeListSetThemeList({ themeList: x })));
    this.store.dispatch(themeListLoadThemeList());
  }

  ngAfterViewInit(): void{
    // console.log('View was initialized');
  }

  ngOnDestroy(): void{
    this.store.dispatch(themeListClearThemeList());
  }
}
