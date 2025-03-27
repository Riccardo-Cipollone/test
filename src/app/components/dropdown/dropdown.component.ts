import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-dropdown",
  imports: [NgClass],
  template: `
    <details
      class="dropdown"
      [ngClass]="{
        'dropdown-top': position === 'top',
        'dropdown-left': position === 'left',
        'dropdown-right': position === 'right',
      }"
    >
      <summary class="btn m-1">
        <ng-content></ng-content>
      </summary>
      <ul
        class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        @for (item of items; track $index) {
          <li (click)="onClickElement.emit(item.value)">
            <a>{{ item.label }}</a>
          </li>
        }
      </ul>
    </details>
  `,
  styles: ``,
})
export class DropdownComponent {
  @Input() items: DropdownItem[] = [];
  @Input() position: DropdownPosition = "bottom";
  @Output() onClickElement = new EventEmitter();
}

export interface DropdownItem {
  label: string;
  value: string;
}

export type DropdownPosition = "left" | "right" | "top" | "bottom";
