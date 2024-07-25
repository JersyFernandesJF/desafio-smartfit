import { Component, Input, OnInit } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-cards-list",
  standalone: true,
  templateUrl: "./cards-list.component.html",
  styleUrl: "./cards-list.component.css",
  imports: [CardComponent, NgFor],
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}
}
