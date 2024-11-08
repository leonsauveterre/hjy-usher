import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bills-manual',
  standalone: true,
  imports: [
    CodeDisplayComponent,
    FormsModule
  ],
  templateUrl: './bills-manual.component.html',
  styleUrl: './bills-manual.component.css'
})
export class BillsManualComponent {

  private SQLStatements: readonly string[] = [
    `SELECT *
FROM manual_pull_task_divided`
  ];

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  // 3.1
  @Input() generatedSQL0301: string = this.SQLStatements[0] + ';';

  // 3.1, Select
  checkboxIdsForSelect1: string[] = Array.from({ length: 27 }, (_, i) => `manual-bills-select-1-cb${i + 1}`);

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

  // 3.1, Cond #2
  checkboxIdsForCond2: string[] = Array.from({ length: 13 }, (_, i) => `manual-bills-cond-2-cb${i + 1}`);

  selectAllCheckboxesForCond2(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkboxIdsForCond2.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = true;
        }
      });
    }
  }

  invertCheckboxSelectionForCond2(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkboxIdsForCond2.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
        }
      });
    }
  }

  // 3.1, Cond #3
  readonly fmt = 'yyyy-LL-dd\'T\'HH:mm';
  maxDateTime: string = DateTime.local().toFormat(this.fmt);  // Example: 2024-11-07T14:30
  startDateTime: string = DateTime.local().startOf('day').toFormat(this.fmt);  // Start of today
  endDateTime: string = this.maxDateTime;
  startInput: HTMLInputElement | null = null;
  endInput: HTMLInputElement | null = null;

  validateDateTime(type: 'start' | 'end'): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.startInput) {
        this.startInput = document.getElementById('bills-manual-input-3-1-cond4-start-dt') as HTMLInputElement;
      }
      if (!this.endInput) {
        this.endInput = document.getElementById('bills-manual-input-3-1-cond4-end-dt') as HTMLInputElement;
      }
      const selectedDateTime = type === 'start' ? this.startDateTime : this.endDateTime;
      if (selectedDateTime && selectedDateTime > (this.maxDateTime = DateTime.local().toFormat(this.fmt))) {
        alert('You cannot select a date/time in the future.');
        return false;
      }
    }
    return true;
  }

  updateInputs() {
    if (this.validateDateTime('start') && this.validateDateTime('end') && this.startInput && this.endInput) {
      this.startInput.value = this.startDateTime;
      this.endInput.value = this.endDateTime;
    }
  }

  selectTodayForCond4() {
    if (isPlatformBrowser(this.platformId)) {
      const today = DateTime.local().startOf('day');
      this.startDateTime = today.toFormat(this.fmt);
      this.endDateTime = this.maxDateTime;
      this.updateInputs();
    }
  }

  selectYesterdayForCond4() {
    if (isPlatformBrowser(this.platformId)) {
      const yesterday = DateTime.local().minus({days: 1}).startOf('day');
      this.startDateTime = yesterday.toFormat(this.fmt);
      this.endDateTime = yesterday.endOf('day').toFormat(this.fmt);
      this.updateInputs();
    }
  }

  selectLast35HoursForCond4() {
    if (isPlatformBrowser(this.platformId)) {
      const now = DateTime.local();
      const start = now.minus({hours: 35}).toFormat(this.fmt);
      const end = now.toFormat(this.fmt);
      this.startDateTime = start;
      this.endDateTime = end;
      this.updateInputs();
    }
  }

  selectLast3DaysForCond4() {
    if (isPlatformBrowser(this.platformId)) {
      const now = DateTime.local();
      const start = now.minus({days: 3}).startOf('day').toFormat(this.fmt);
      const end = now.toFormat(this.fmt);
      this.startDateTime = start;
      this.endDateTime = end;
      this.updateInputs();
    }
  }

  // 3.1, Generation
  @ViewChild('codeResult0301') codeResult0301!: CodeDisplayComponent;

  genSQLS03E01(): void {
    if (isPlatformBrowser(this.platformId)) {
      let selects: string[] = [];
      this.checkboxIdsForSelect1.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        let fieldName;
        if (checkbox && checkbox.checked && (fieldName = checkbox.getAttribute('_fieldName'))) {
          selects.push(fieldName);
        }
      });

      let conditions: string[] = [];

      const rawTenantIds = (document.getElementById('bills-manual-input-3-1-tenant-id') as HTMLInputElement).value.trim().split(/, */);
      const tenantIds: string[] = [];
      for (let tenantId of rawTenantIds) {
        if (tenantId.match(/\d+/)) {
          tenantIds.push(tenantId);
        }
      }
      if (tenantIds.length == 1) {
        conditions.push(`tenant_id = ${tenantIds[0]}`);
      } else if (tenantIds.length > 1) {
        conditions.push(`tenant_id IN (${tenantIds.join(', ')})`);
      }

      const pullTypes: string[] = [];
      this.checkboxIdsForCond2.forEach(id => {
        const checkbox = document.getElementById(id) as HTMLInputElement;
        let pullType;
        if (checkbox && checkbox.checked && (pullType = checkbox.getAttribute('_pullType'))) {
          pullTypes.push(pullType);
        }
      });
      if (pullTypes.length == 1) {
        conditions.push(`pull_type = ${pullTypes[0]}`);
      } else if (pullTypes.length > 1 && pullTypes.length < this.checkboxIdsForCond2.length) {
        conditions.push(`pull_type IN (${pullTypes.join(', ')})`);
      }

      const taskStatuses: string[] = [];
      Array.from({ length: 5 }, (_, i) => `manual-bills-cond-3-rd${i + 1}`).forEach(id => {
        const radio = document.getElementById(id) as HTMLInputElement;
        let taskStatus;
        if (radio && radio.checked && (taskStatus = radio.getAttribute('_taskStatus')) && taskStatus !== "all") {
          taskStatuses.push(taskStatus);
        }
      });
      if (taskStatuses.length == 1) {
        conditions.push(`task_status = ${taskStatuses[0]}`);
      } /*else if (taskStatuses.length > 1) {
        conditions.push(`task_status IN (${taskStatuses.join(', ')})`);
      }*/

      // start/end datetime
      const startDateTime = this.startInput?.value.trim();
      const endDateTime = this.endInput?.value.trim();
      if (startDateTime && endDateTime) {
        conditions.push(`created_at BETWEEN '${startDateTime}' AND '${endDateTime}'`);
      }

      let stmt: string = 'SELECT ' + selects.join(', ') + '\nFROM manual_pull_task_divided';
      if (conditions.length > 0) {
        stmt += '\nWHERE ' + conditions[0];
        for (let i = 1; i < conditions.length; i++) {
          stmt += '\n  AND ' + conditions[i];
        }
      }
      this.generatedSQL0301 = stmt + ';';
      this.cdr.detectChanges();
      this.codeResult0301.rerender();
    }
  }

}
