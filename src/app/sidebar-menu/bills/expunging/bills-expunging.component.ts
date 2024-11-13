import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { isPlatformBrowser, NgForOf } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bills-expunging',
  standalone: true,
  imports: [
    CodeDisplayComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './bills-expunging.component.html',
  styleUrl: './bills-expunging.component.css'
})
export class BillsExpungingComponent {

  private presetStatements: readonly string[] = [
    `SELECT *
FROM bill_import_delayed_deletion`,
  ]

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  // 3.1
  @Input() generatedSQL0301: string = this.presetStatements[0] + ';';

  // 3.1, Select
  manual0301Select01 = [
    [
      { id: 'manual-bills-select-1-cb1', fieldName: 'id', label: 'id', checked: true },
      { id: 'manual-bills-select-1-cb2', fieldName: 'bibi_id', label: 'bibi_id', checked: true },
      { id: 'manual-bills-select-1-cb3', fieldName: 'custom_bill_id', label: 'custom_bill_id', checked: true },
      { id: 'manual-bills-select-1-cb4', fieldName: 'batch_number', label: 'batch_number', checked: true },
      { id: 'manual-bills-select-1-cb5', fieldName: 'tenant_id', label: 'tenant_id', checked: true },
      { id: 'manual-bills-select-1-cb6', fieldName: 'platform_id', label: 'platform_id', checked: true }
    ],
    [
      { id: 'manual-bills-select-1-cb7', fieldName: 'bill_name', label: 'bill_name', checked: true },
      { id: 'manual-bills-select-1-cb8', fieldName: 'bill_type', label: 'bill_type', checked: true },
      { id: 'manual-bills-select-1-cb9', fieldName: 'import_type', label: 'import_type', checked: true },
      { id: 'manual-bills-select-1-cb10', fieldName: 'import_channel_platform', label: 'import_channel_platform', checked: true },
      { id: 'manual-bills-select-1-cb11', fieldName: 'shop_id', label: 'shop_id', checked: true },
      { id: 'manual-bills-select-1-cb12', fieldName: 'custom_platform_id', label: 'custom_platform_id', checked: true }
    ],
    [
      { id: 'manual-bills-select-1-cb13', fieldName: 'sub_bill_platform', label: 'sub_bill_platform', checked: true },
      { id: 'manual-bills-select-1-cb14', fieldName: 'market_scene', label: 'market_scene', checked: false },
      { id: 'manual-bills-select-1-cb15', fieldName: 'date_list', label: 'date_list', checked: true },
      { id: 'manual-bills-select-1-cb16', fieldName: 'created_at', label: 'created_at', checked: true },
      { id: 'manual-bills-select-1-cb17', fieldName: 'started_at', label: 'started_at', checked: true },
      { id: 'manual-bills-select-1-cb18', fieldName: 'completed_at', label: 'completed_at', checked: true }
    ],
    [
      { id: 'manual-bills-select-1-cb19', fieldName: 'archived_at', label: 'archived_at', checked: true },
      { id: 'manual-bills-select-1-cb20', fieldName: 'verified_at', label: 'verified_at', checked: true },
      { id: 'manual-bills-select-1-cb21', fieldName: 'proof', label: 'proof', checked: true },
      { id: 'manual-bills-select-1-cb22', fieldName: 'task_status', label: 'task_status', checked: true },
    ]
  ];

  checkboxIdsForSelect1: string[] = Array.from({ length: 22 }, (_, i) => `manual-bills-select-1-cb${i + 1}`);

  selectAllCheckboxesForSelect1(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkboxIdsForSelect1.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
  }

  invertCheckboxSelectionForSelect1(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkboxIdsForSelect1.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
        }
      });
    }
  }
}
