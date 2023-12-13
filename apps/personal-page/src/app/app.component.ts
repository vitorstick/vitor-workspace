import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TemplateComponent } from './components/template/template.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent, TemplateComponent],
  selector: 'vt-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-page';
}
