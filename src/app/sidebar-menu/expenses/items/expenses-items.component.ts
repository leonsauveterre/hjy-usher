import { Component } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';

@Component({
  selector: 'app-items',
  imports: [
    CodeDisplayComponent
  ],
  templateUrl: './expenses-items.component.html',
  styleUrl: './expenses-items.component.css'
})
export class ExpensesItemsComponent {
  protected presetStatements: readonly string[] = [
    `SELECT *
FROM bill_enum
WHERE enum_name = 'is_show_refresh_button';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'is_open_time';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'mark_standard_limit';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'mark_account_limit';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'mark_total_standard_limit';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'mark_total_account_limit';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'tolerable_abnormal_decimal';`,

    `SELECT *
FROM bill_enum
WHERE enum_name = 'custom_marketing_import_trustworthy';`,
  ];

}
