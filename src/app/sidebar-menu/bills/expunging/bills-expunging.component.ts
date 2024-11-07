import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';

@Component({
  selector: 'app-bills-expunging',
  standalone: true,
  imports: [
    CodeDisplayComponent
  ],
  templateUrl: './bills-expunging.component.html',
  styleUrl: './bills-expunging.component.css'
})
export class BillsExpungingComponent {
}
