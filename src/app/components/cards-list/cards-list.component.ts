import { Component, Input } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { CommonModule, NgFor } from "@angular/common";
import { Location } from "../../types/location-interface";

@Component({
  selector: "app-cards-list",
  standalone: true,
  templateUrl: "./cards-list.component.html",
  styleUrl: "./cards-list.component.css",
  imports: [CardComponent, NgFor, CommonModule],
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}
}
