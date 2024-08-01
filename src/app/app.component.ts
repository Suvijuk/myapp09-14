import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NvbarComponent } from "./nvbar/nvbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NvbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-main';
}
