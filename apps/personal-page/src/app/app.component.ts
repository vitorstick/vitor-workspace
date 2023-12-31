import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    SidePanelComponent,
    HeaderComponent,
  ],
  selector: 'vt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-page';
}
