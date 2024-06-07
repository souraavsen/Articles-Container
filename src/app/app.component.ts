import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, PostsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Post Container";
  user = "Sourav Sen";
}
