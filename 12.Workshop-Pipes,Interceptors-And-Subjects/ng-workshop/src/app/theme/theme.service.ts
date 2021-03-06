import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost, ITheme, IUser } from '../shared/interfaces';
import { environment } from '../../environments/environment';
import { INewTheme } from '../shared/interfaces/new-theme';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    // return this.http.get<ITheme[]>(`${apiUrl}/themes`);
    return this.http.get<ITheme[]>(`/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost, string>> {
    return this.http.get<ITheme<IPost, string>>(`/themes/${id}`);
  }

  saveTheme(data: INewTheme): Observable<ITheme<string, string>>{
    return this.http.post<ITheme<string, string>>(`/themes`, data);
  }
}
