import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FormsComponent } from "./components/forms/forms.component";
import { CardsListComponent } from "./components/cards-list/cards-list.component";
import { CardComponent } from "./components/card/card.component";
import { LegendComponent } from "./legend/legend.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Location } from "./types/location-interface";
import { GetUnitsService } from "./services/gt-units.service";

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
    FooterComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsComponent,
  ],
  styleUrl: "./app.component.css",
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService: GetUnitsService){ }

  onSubmit(){
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }
}
