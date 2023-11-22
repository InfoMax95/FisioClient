import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = environment.apiUrl;
  private posts$: Subject<Post[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshPosts() {
    this.httpClient.get<Post[]>(`${this.url}/posts`)
      .subscribe(posts => {
        this.posts$.next(posts);
      });
  }

  getPosts(): Subject<Post[]> {
    this.refreshPosts();
    return this.posts$;
  }

  getPost(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url}/posts/${id}`);
  }

  createPost(post: Post): Observable<string> {
    return this.httpClient.post(`${this.url}/posts`, post, { responseType: 'text' });
  }

  updatePost(id: string, post: Post): Observable<string> {
    return this.httpClient.put(`${this.url}/posts/${id}`, post, { responseType: 'text' });
  }

  deletePost(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/posts/${id}`, { responseType: 'text' });
  }
}
