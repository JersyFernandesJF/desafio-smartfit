import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FormsComponent } from "./components/forms/forms.component";
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { CardComponent } from "./components/card/card.component";
import { LegendComponent } from "./legend/legend.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
    CardComponent,
    LegendComponent,
    FooterComponent
  ],
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "desafio-smartfit";
}
