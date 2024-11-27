import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';
import { isPlatformBrowser, NgForOf } from '@angular/common';

@Component({
  selector: 'app-bills-manual',
  imports: [
    CodeDisplayComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './bills-manual.component.html',
  styleUrl: './bills-manual.component.css'
})
export class BillsManualComponent {

  private presetStatements: readonly string[] = [
    `SELECT *
FROM manual_pull_task_divided`,

    `SELECT tenant_id, COUNT(*)
FROM manual_pull_task_divided
WHERE task_status < 30
GROUP BY tenant_id
ORDER BY tenant_id`,

    `SELECT tenant_id, pull_type, COUNT(*)
FROM manual_pull_task_divided
WHERE task_status < 30
GROUP BY tenant_id, pull_type
ORDER BY tenant_id, pull_type`,

    `SELECT tenant_id, pull_type, task_status, COUNT(*)
FROM manual_pull_task_divided
WHERE task_status < 30
GROUP BY tenant_id, pull_type, task_status
ORDER BY tenant_id, pull_type, task_status`
  ];

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  // 3.1
  @Input() generatedSQL0301: string = this.presetStatements[0] + ';';

  // 3.1, Select
  manual0301Select01 = [
    [
      { id: 'manual-bills-select-1-cb1', fieldName: 'id', label: 'id', checked: true },
      { id: 'manual-bills-select-1-cb2', fieldName: 'main_id', label: 'main_id', checked: true },
      { id: 'manual-bills-select-1-cb3', fieldName: 'tenant_id', label: 'tenant_id', checked: true },
      { id: 'manual-bills-select-1-cb4', fieldName: 'platform_id', label: 'platform_id', checked: true },
      { id: 'manual-bills-select-1-cb5', fieldName: 'shop_id', label: 'shop_id', checked: true },
      { id: 'manual-bills-select-1-cb6', fieldName: 'account_id', label: 'account_id', checked: true }
    ],
    [
      { id: 'manual-bills-select-1-cb7', fieldName: 'account_no', label: 'account_no', checked: true },
      { id: 'manual-bills-select-1-cb8', fieldName: 'pull_type', label: 'pull_type', checked: true },
      { id: 'manual-bills-select-1-cb9', fieldName: 'pull_start', label: 'pull_start', checked: true },
      { id: 'manual-bills-select-1-cb10', fieldName: 'pull_end', label: 'pull_end', checked: true },
      { id: 'manual-bills-select-1-cb11', fieldName: 'task_status', label: 'task_status', checked: true },
      { id: 'manual-bills-select-1-cb12', fieldName: 'org_count', label: 'org_count', checked: true }
    ],
    [
      { id: 'manual-bills-select-1-cb13', fieldName: 'new_count', label: 'new_count', checked: true },
      { id: 'manual-bills-select-1-cb14', fieldName: 'new_count - org_count AS increment', label: 'increment (Calculated)', checked: true },
      { id: 'manual-bills-select-1-cb15', fieldName: 'created_at', label: 'created_at', checked: true },
      { id: 'manual-bills-select-1-cb16', fieldName: 'started_at', label: 'started_at', checked: true },
      { id: 'manual-bills-select-1-cb17', fieldName: 'completed_at', label: 'completed_at', checked: true },
      { id: 'manual-bills-select-1-cb18', fieldName: 'verified_at', label: 'verified_at', checked: false }
    ],
    [
      { id: 'manual-bills-select-1-cb19', fieldName: 'proof', label: 'proof', checked: false },
      { id: 'manual-bills-select-1-cb20', fieldName: 'registrar', label: 'registrar', checked: false },
      { id: 'manual-bills-select-1-cb21', fieldName: 'failure_reason', label: 'failure_reason', checked: true },
      { id: 'manual-bills-select-1-cb22', fieldName: 'remark', label: 'remark', checked: false },
      { id: 'manual-bills-select-1-cb23', fieldName: 'reserved_field1', label: 'reserved_field1', checked: false },
      { id: 'manual-bills-select-1-cb24', fieldName: 'reserved_field2', label: 'reserved_field2', checked: false }
    ],
    [
      { id: 'manual-bills-select-1-cb25', fieldName: 'reserved_field3', label: 'reserved_field3', checked: false },
      { id: 'manual-bills-select-1-cb26', fieldName: 'reserved_field4', label: 'reserved_field4', checked: false },
      { id: 'manual-bills-select-1-cb27', fieldName: 'reserved_field5', label: 'reserved_field5', checked: false }
    ]
  ];

  checkboxIdsForSelect1: string[] = Array.from({ length: 27 }, (_, i) => `manual-bills-select-1-cb${i + 1}`);

  selectAllCheckboxesForSelect1(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.checkboxIdsForSelect1.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }

  invertCheckboxSelectionForSelect1(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.checkboxIdsForSelect1.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    });
  }

  // 3.1, Cond #2
  manual0301Cond02 = [
    [
      { id: 'manual-bills-cond-2-cb1', pullType: '10', label: '支付宝' },
      { id: 'manual-bills-cond-2-cb2', pullType: '20', label: '京东货款流水' },
      { id: 'manual-bills-cond-2-cb3', pullType: '21', label: '京东货款流水（包括优惠券）' },
      { id: 'manual-bills-cond-2-cb4', pullType: '30', label: '京东钱包' },
      { id: 'manual-bills-cond-2-cb5', pullType: '40', label: '抖店货款' }
    ],
    [
      { id: 'manual-bills-cond-2-cb6', pullType: '50', label: '快手小店货款' },
      { id: 'manual-bills-cond-2-cb7', pullType: '60', label: '京准通' },
      { id: 'manual-bills-cond-2-cb8', pullType: '120', label: '快手超售后期' },
      { id: 'manual-bills-cond-2-cb9', pullType: '130', label: '快手安心钱包' },
      { id: 'manual-bills-cond-2-cb10', pullType: '140', label: '视频号资金流水' }
    ],
    [
      { id: 'manual-bills-cond-2-cb11', pullType: '160', label: '小红书订单货款' },
      { id: 'manual-bills-cond-2-cb12', pullType: '170', label: '小红书其他服务款' },
      { id: 'manual-bills-cond-2-cb13', pullType: '180', label: '小红书人工调账' }
    ],
  ];

  checkboxIdsForCond2: string[] = Array.from({ length: 13 }, (_, i) => `manual-bills-cond-2-cb${i + 1}`);

  selectAllCheckboxesForCond2(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.checkboxIdsForCond2.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = true;
      }
    });
  }

  invertCheckboxSelectionForCond2(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.checkboxIdsForCond2.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
      }
    });
  }

  // 3.1, Cond #3
  manual0301Cond03 = [
    [
      { id: 'manual-bills-cond-3-rd1', taskStatus: 'all', label: '所有状态', checked: true },
      { id: 'manual-bills-cond-3-rd2', taskStatus: '10', label: '待执行', checked: false },
      { id: 'manual-bills-cond-3-rd3', taskStatus: '25', label: '分摊中', checked: false },
      { id: 'manual-bills-cond-3-rd4', taskStatus: '30', label: '已完成', checked: false },
      { id: 'manual-bills-cond-3-rd5', taskStatus: '80', label: '任务异常', checked: false }
    ]
  ];

  // 3.1, Cond #4
  readonly fmt = 'yyyy-LL-dd\'T\'HH:mm';
  maxDateTime: string = DateTime.local().toFormat(this.fmt);  // Example: 2024-11-07T14:30
  startDateTime: string = DateTime.local().startOf('day').toFormat(this.fmt);  // Start of today
  endDateTime: string = this.maxDateTime;
  startInput: HTMLInputElement | null = null;
  endInput: HTMLInputElement | null = null;

  validateDateTime(type: 'start' | 'end'): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
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
    return true;
  }

  updateInputs(): void {
    if (this.validateDateTime('start') && this.validateDateTime('end') && this.startInput && this.endInput) {
      this.startInput.value = this.startDateTime;
      this.endInput.value = this.endDateTime;
    }
  }

  selectTodayForCond4() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const today = DateTime.local().startOf('day');
    this.startDateTime = today.toFormat(this.fmt);
    this.endDateTime = this.maxDateTime;
    this.updateInputs();
  }

  selectYesterdayForCond4() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const yesterday = DateTime.local().minus({days: 1}).startOf('day');
    this.startDateTime = yesterday.toFormat(this.fmt);
    this.endDateTime = yesterday.endOf('day').toFormat(this.fmt);
    this.updateInputs();
  }

  selectLast35HoursForCond4() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const now = DateTime.local();
    const start = now.minus({hours: 35}).toFormat(this.fmt);
    const end = now.toFormat(this.fmt);
    this.startDateTime = start;
    this.endDateTime = end;
    this.updateInputs();
  }

  selectLast3DaysForCond4() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const now = DateTime.local();
    const start = now.minus({days: 3}).startOf('day').toFormat(this.fmt);
    const end = now.toFormat(this.fmt);
    this.startDateTime = start;
    this.endDateTime = end;
    this.updateInputs();
  }

  // 3.1, Generation
  @ViewChild('codeResult0301') codeResult0301!: CodeDisplayComponent;

  genSQLS03E01(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    let selects: string[] = [];
    this.checkboxIdsForSelect1.forEach(id => {
      const checkbox = document.getElementById(id) as HTMLInputElement;
      let fieldName;
      if (checkbox && checkbox.checked && (fieldName = checkbox.getAttribute('_fieldName'))) {
        selects.push(fieldName);
      }
    });

    if (selects.length == 0) {
      selects = ['*'];
    }

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
    Array.from({length: 5}, (_, i) => `manual-bills-cond-3-rd${i + 1}`).forEach(id => {
      const radio = document.getElementById(id) as HTMLInputElement;
      let taskStatus;
      if (radio && radio.checked && (taskStatus = radio.getAttribute('_taskStatus')) && taskStatus !== "all") {
        taskStatuses.push(taskStatus);
      }
    });
    if (taskStatuses.length == 1) {
      conditions.push(`task_status = ${taskStatuses[0]}`);
    }

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

  // 3.2
  @ViewChild('codeResult0302A') codeResult0302A!: CodeDisplayComponent;
  @ViewChild('codeResult0302B') codeResult0302B!: CodeDisplayComponent;
  @ViewChild('codeResult0302C') codeResult0302C!: CodeDisplayComponent;

  generatedSQL0302A: string = this.presetStatements[1] + ';';
  generatedSQL0302B: string = this.presetStatements[2] + ';';
  generatedSQL0302C: string = this.presetStatements[3] + ';';
}
