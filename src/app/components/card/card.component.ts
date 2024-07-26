import { Component, Input } from "@angular/core";
import { Location } from "../../types/location-interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  imports:[CommonModule]
})
export class CardComponent {
  @Input() card!: Location;

  constructor() {}

  ngOnInit(): void {}
}
