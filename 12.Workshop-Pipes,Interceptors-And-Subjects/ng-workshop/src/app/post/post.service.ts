import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from '../shared/interfaces';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPostList(themeId: string, limit?: number): Observable<IPost[]> {
    // return of([{}, {}, {}]);
    return this.http.get<IPost[]>(`/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
