import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-forms",
  standalone: true,
  templateUrl: "./forms.component.html",
  styleUrl: "./forms.component.css",
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormsComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: "",
      showClosed: true,
    });
  }
  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value;

    this.submitEvent.emit();
  }
  onClean(): void {
    this.formGroup.reset();
  }
}
