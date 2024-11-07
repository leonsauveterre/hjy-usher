import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';

@Component({
  selector: 'app-manual',
  standalone: true,
  imports: [
    CodeDisplayComponent
  ],
  templateUrl: './bills-manual.component.html',
  styleUrl: './bills-manual.component.css'
})
export class BillsManualComponent {
  protected readonly javaCodes = [
`public class JavaBillsExpunging01 {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`
  ];
}
