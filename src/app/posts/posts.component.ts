import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { PostService } from "./services/post.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.css",
})
export class PostsComponent {
  constructor(private postService: PostService) {}
  // private postService = new PostService();

  handleClick(e: MouseEvent) {
    console.log(e.target);
  }

  getposts(page = 1, offset = 10) {
    return this.postService.getPosts()?.length
      ? this.postService.getPosts()
      : [];
  }

  email = "";
  getEmail() {
    console.log(this.email);
  }
}
