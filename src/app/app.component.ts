import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AccordionItemComponent } from "./components/accordion-item/accordion-item.component";
import { AlertComponent } from "./components/alert/alert.component";
import {
  DropdownComponent,
  DropdownItem,
} from "./components/dropdown/dropdown.component";
import { PhoneComponent } from "./components/phone/phone.component";
import {
  TimelineComponent,
  TimelineItem,
} from "./components/timeline/timeline.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    CommonModule,
    PhoneComponent,
    TimelineComponent,
    AlertComponent,
    AccordionItemComponent,
    DropdownComponent,
  ],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  imageUrl = "https://img.daisyui.com/images/stock/453966.webp";
  alt = "wallpaper";

  timelineItems: TimelineItem[] = [
    { start: "2010", end: "Mario" },
    { start: "2015", end: "Luigi" },
    { start: "2020", end: "Gigi" },
  ];

  dropdownItems: DropdownItem[] = [
    { label: "Button", value: "button" },
    { label: "Modal", value: "modal" },
    { label: "Accordion", value: "accordion" },
    { label: "Utils and Variables", value: "utilities-and-variables" },
  ];

  onDenyHandler() {
    window.alert("Deny");
  }

  onConfirmHandler() {
    window.alert("Confirm!");
  }

  onClickElementHandler(event: string) {
    window.alert(`Hai selezionato l'elemento ${event}!`);
  }
}
