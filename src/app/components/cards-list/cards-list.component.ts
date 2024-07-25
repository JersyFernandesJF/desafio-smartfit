import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  imports: [CardComponent]
})
export class CardsListComponent {

}
