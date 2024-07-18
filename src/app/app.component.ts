import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports :[HeaderComponent, FormsComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-smartfit';
}
