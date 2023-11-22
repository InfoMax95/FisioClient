import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { BehaviorSubject } from 'rxjs';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [CommonModule, PostFormComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
  post: BehaviorSubject<Post> = new BehaviorSubject({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      alert('No id provided');
    }

    this.postService.getPost(id!).subscribe((post) => {
      this.post.next(post);
    });
  }

  editPost(post: Post) {
    this.postService.updatePost(this.post.value._id || '', post)
      .subscribe({
        next: () => {
          this.router.navigate(['/posts']);
        },
        error: (error) => {
          alert('Failed to update post');
          console.error(error);
        }
      })
  }
}
