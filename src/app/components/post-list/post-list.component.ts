import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { RouterLink } from '@angular/router';
import { PostCardComponent } from '../../shared/post-card/post-card.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts$: Observable<Post[]> = new Observable();

  public items = [1, 2, 3, 4, 5, 6]

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  deletePost(id: string): void {
    this.postsService.deletePost(id).subscribe({
      next: () => this.fetchPosts()
    });
  }

  private fetchPosts(): void {
    this.posts$ = this.postsService.getPosts();
  }
}
