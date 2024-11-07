import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';

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

  constructor(private cdRef: ChangeDetectorRef) {
  }

  // 3.1
  @Input() generatedSQLS03E01: string = `SELECT *
FROM manual_pull_task_divided
WHERE id = 1;`;

  // 3.1, Cond #2
  checkboxIdsForCond2: string[] = Array.from({ length: 13 }, (_, i) => `manual-bills-cond-2-cb${i + 1}`);

  selectAllCheckboxesForCond2(): void {
    this.checkboxIdsForCond2.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }

  invertCheckboxSelectionForCond2(): void {
    this.checkboxIdsForCond2.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    });
  }

  // 3.1, Cond #3
  readonly fmt = 'yyyy-LL-dd\'T\'HH:mm';
  maxDateTime: string = DateTime.local().toFormat(this.fmt);  // Example: 2024-11-07T14:30
  startDateTime: string = this.maxDateTime;
  endDateTime: string = this.maxDateTime;

  validateDateTime(type: 'start' | 'end'): void {
    const selectedDateTime = type === 'start' ? this.startDateTime : this.endDateTime;
    console.log(selectedDateTime);
    console.log("Max: " + this.maxDateTime);
    if (selectedDateTime && selectedDateTime > (this.maxDateTime = DateTime.local().toFormat(this.fmt))) {
      alert('You cannot select a date/time in the future.');
    }
  }

  updateInputs() {
    const startInput = document.getElementById('bills-manual-input-3-1-cond4-start-dt') as HTMLInputElement;
    const endInput = document.getElementById('bills-manual-input-3-1-cond4-end-dt') as HTMLInputElement;

    if (startInput) {
      startInput.value = this.startDateTime;
    }
    if (endInput) {
      endInput.value = this.endDateTime;
    }
  }

  selectTodayForCond4() {
    const today = DateTime.local().startOf('day');
    this.startDateTime = today.toFormat(this.fmt);
    this.endDateTime = this.maxDateTime;
    this.updateInputs();
  }

  selectYesterdayForCond4() {
    const yesterday = DateTime.local().minus({ days: 1 }).startOf('day');
    this.startDateTime = yesterday.toFormat(this.fmt);
    this.endDateTime = yesterday.endOf('day').toFormat(this.fmt);
    this.updateInputs();
  }

  selectLast35HoursForCond4() {
    const now = DateTime.local();
    const start = now.minus({ hours: 35 }).toFormat(this.fmt);
    const end = now.toFormat(this.fmt);
    this.startDateTime = start;
    this.endDateTime = end;
    this.updateInputs();
  }

  selectLast3DaysForCond4() {
    const now = DateTime.local();
    const start = now.minus({ days: 3 }).startOf('day').toFormat(this.fmt);
    const end = now.toFormat(this.fmt);
    this.startDateTime = start;
    this.endDateTime = end;
    this.updateInputs();
  }

  genSQLS03E01(): void {
    this.generatedSQLS03E01 = `SELECT *
FROM manual_pull_task_divided
WHERE tenant_id = 122;`;
    this.cdRef.detectChanges();
  }
}
