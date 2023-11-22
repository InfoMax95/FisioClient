import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, PostFormComponent],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss'
})
export class AddPostComponent {
  constructor(
    private router: Router,
    private postService: PostsService
  ) { }

  addPost(post: Post) {
    this.postService.createPost(post)
      .subscribe({
        next: () => {
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          alert("Failed to create post");
          console.error(error);
        }
      });
  }
}
