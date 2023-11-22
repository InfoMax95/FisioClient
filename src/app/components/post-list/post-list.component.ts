import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts: Post[] = [{},{},{}]
  // posts$: Observable<Post[]> = new Observable();

  // constructor(private postsService: PostsService) { }

  // ngOnInit(): void {
  //   this.fetchPosts();
  // }

  // deletePost(id: string): void {
  //   this.postsService.deletePost(id).subscribe({
  //     next: () => this.fetchPosts()
  //   });
  // }
  deletePost(id: string) {

  }

  // private fetchPosts(): void {
  //   this.posts$ = this.postsService.getPosts();
  // }
}
