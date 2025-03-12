import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';
import { CodeDisplayComponent } from '../../../code-display/code-display.component';

interface Option {  // multi-layer checkboxes
  label: string;
  expanded: boolean;  // for controlling expand/collapse state
  subOptions?: SubOption[];
  selected?: boolean;
}

interface SubOption {
  id?: string;
  label: string;
  expanded: boolean;
  importChannelPlatform?: string;
  subBillPlatform?: string;
  selected?: boolean;
  subOptions?: SubOption[];
}

@Component({
  selector: 'app-bills-expunging',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    CodeDisplayComponent
  ],
  templateUrl: './bills-expunging.component.html',
  styleUrl: './bills-expunging.component.css'
})
export class BillsExpungingComponent {

  private presetStatements: readonly string[] = [
    `SELECT *
FROM bill_import_delayed_deletion`,

    `SELECT tenant_id, COUNT(*)
FROM bill_import_delayed_deletion
WHERE task_status < 4
   OR task_status >= 92
GROUP BY tenant_id
ORDER BY tenant_id`,

    `SELECT tenant_id, import_channel_platform, sub_bill_platform, COUNT(*)
FROM bill_import_delayed_deletion
WHERE task_status < 4
   OR task_status >= 92
GROUP BY tenant_id, import_channel_platform, sub_bill_platform
ORDER BY tenant_id, import_channel_platform, sub_bill_platform`,

    `SELECT tenant_id, import_channel_platform, sub_bill_platform, task_status, COUNT(*)
FROM bill_import_delayed_deletion
WHERE task_status < 4
   OR task_status >= 92
GROUP BY tenant_id, import_channel_platform, sub_bill_platform, task_status
ORDER BY tenant_id, import_channel_platform, sub_bill_platform, task_status`,

    `SELECT id, tenant_id, shop_id, batch_number, import_status,
       IF(import_status = '6', '', ' -- ABNORMAL -- ') AS PROMPT
FROM bill_import_basic_info WHERE id IN (
    SELECT bibi_id
    FROM bill_import_delayed_deletion
    WHERE DATE(created_at) = CURDATE()
)`
  ];

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  // 3.1
  @Input() generatedSQL0301: string = this.presetStatements[0] + ';';

  // 3.1, Select
  expunging0301Select01 = [
    [
      { id: 'expunging-bills-select-1-cb1', fieldName: 'id', label: 'id', checked: true },
      { id: 'expunging-bills-select-1-cb2', fieldName: 'bibi_id', label: 'bibi_id', checked: true },
      { id: 'expunging-bills-select-1-cb3', fieldName: 'custom_bill_id', label: 'custom_bill_id', checked: true },
      { id: 'expunging-bills-select-1-cb4', fieldName: 'batch_number', label: 'batch_number', checked: true },
      { id: 'expunging-bills-select-1-cb5', fieldName: 'tenant_id', label: 'tenant_id', checked: true },
      { id: 'expunging-bills-select-1-cb6', fieldName: 'platform_id', label: 'platform_id', checked: true }
    ],
    [
      { id: 'expunging-bills-select-1-cb7', fieldName: 'bill_name', label: 'bill_name', checked: true },
      { id: 'expunging-bills-select-1-cb8', fieldName: 'bill_type', label: 'bill_type', checked: true },
      { id: 'expunging-bills-select-1-cb9', fieldName: 'import_type', label: 'import_type', checked: true },
      { id: 'expunging-bills-select-1-cb10', fieldName: 'import_channel_platform', label: 'import_channel_platform', checked: true },
      { id: 'expunging-bills-select-1-cb11', fieldName: 'shop_id', label: 'shop_id', checked: true },
      { id: 'expunging-bills-select-1-cb12', fieldName: 'custom_platform_id', label: 'custom_platform_id', checked: true }
    ],
    [
      { id: 'expunging-bills-select-1-cb13', fieldName: 'sub_bill_platform', label: 'sub_bill_platform', checked: true },
      { id: 'expunging-bills-select-1-cb14', fieldName: 'market_scene', label: 'market_scene', checked: false },
      { id: 'expunging-bills-select-1-cb15', fieldName: 'date_list', label: 'date_list', checked: true },
      { id: 'expunging-bills-select-1-cb16', fieldName: 'created_at', label: 'created_at', checked: true },
      { id: 'expunging-bills-select-1-cb17', fieldName: 'started_at', label: 'started_at', checked: true },
      { id: 'expunging-bills-select-1-cb18', fieldName: 'completed_at', label: 'completed_at', checked: true }
    ],
    [
      { id: 'expunging-bills-select-1-cb19', fieldName: 'archived_at', label: 'archived_at', checked: true },
      { id: 'expunging-bills-select-1-cb20', fieldName: 'verified_at', label: 'verified_at', checked: true },
      { id: 'expunging-bills-select-1-cb21', fieldName: 'proof', label: 'proof', checked: true },
      { id: 'expunging-bills-select-1-cb22', fieldName: 'task_status', label: 'task_status', checked: true },
    ]
  ];

  checkboxIdsForSelect1: string[] = Array.from({ length: 22 }, (_, i) => `expunging-bills-select-1-cb${i + 1}`);

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
  options: Option[] = [
    {
      label: '资金账单',
      expanded: true,
      subOptions: [
        {
          label: '支付宝',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb1', label:'支付宝账单', expanded: false, importChannelPlatform: 'alipay_money', subBillPlatform: '', selected: false }
          ]
        },
        {
          label: '京东',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb2', label:'京东货款账单', expanded: false, importChannelPlatform: 'jd_money', subBillPlatform: '', selected: false }
          ]
        },
        {
          label: '拼多多',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb3', label:'拼多多货款账单', expanded: false, importChannelPlatform: 'pdd_money', subBillPlatform: 'pdd_money', selected: false },
            { id: 'manual-expunging-cond-2-cb4', label:'拼多多百亿补贴', expanded: false, importChannelPlatform: 'pdd_money', subBillPlatform: 'pdd_billions_money', selected: false }
          ]
        },
        {
          label: '小米有品',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb5', label:'运费免邮表', expanded: false, importChannelPlatform: 'xmyp_money', subBillPlatform: 'carriage_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb6', label:'奖惩罚金', expanded: false, importChannelPlatform: 'xmyp_money', subBillPlatform: 'changeing_fee_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb7', label:'手续费明细', expanded: false, importChannelPlatform: 'xmyp_money', subBillPlatform: 'installment_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb8', label:'贷款结算单', expanded: false, importChannelPlatform: 'xmyp_money', subBillPlatform: 'pay_settlement_bill', selected: false }
          ]
        },
        {
          label: '小红书',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb27', label:'订单货款', expanded: false, importChannelPlatform: 'xhs_money', subBillPlatform: '9956', selected: false },
            { id: 'manual-expunging-cond-2-cb28', label:'其他服务款', expanded: false, importChannelPlatform: 'xhs_money', subBillPlatform: '9856', selected: false },
            { id: 'manual-expunging-cond-2-cb29', label:'人工调账', expanded: false, importChannelPlatform: 'xhs_money', subBillPlatform: '9756', selected: false }
          ]
        }
      ]
    },
    {
      label: '营销账单',
      expanded: true,
      subOptions: [
        {
          label: '阿里妈妈',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb9', label:'直通车', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_ztc_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb10', label:'引力魔方', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_cube_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb11', label:'明星店铺', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_pxb_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb12', label:'万相台', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_wxt_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb13', label:'无界全站推广', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_wj_qztg_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb14', label:'万相台无界', expanded: false, importChannelPlatform: 'almm', subBillPlatform: 'almm_wxtwj_bill', selected: false }
          ]
        },
        {
          label: '拼多多',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb15', label:'多多搜索', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_search_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb16', label:'明星店铺', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_shop_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb17', label:'多多场景', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_scenes_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb18', label:'全站推广', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_promote_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb19', label:'标准推广', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_standard_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb20', label:'直播推广', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_live_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb21', label:'商品推广', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_goods_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb22', label:'红包发放', expanded: false, importChannelPlatform: 'pdd', subBillPlatform: 'pdd_envelope_bill', selected: false }
          ]
        }
      ]
    },
    {
      label: '直播账单',
      expanded: true,
      subOptions: [
        {
          label: '抖店千川',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb23', label:'标准推广', expanded: false, importChannelPlatform: 'doudian', subBillPlatform: 'qianchuan_std_promo_bill', selected: false },
            { id: 'manual-expunging-cond-2-cb24', label:'全域推广', expanded: false, importChannelPlatform: 'doudian', subBillPlatform: 'qianchuan_glo_promo_bill', selected: false }
          ]
        }
      ]
    },
    {
      label: '自定义账单',
      expanded: true,
      subOptions: [
        {
          label: '资金账单',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb25', label:'自定义资金账单', expanded: false, importChannelPlatform: 'custom_money_bill', subBillPlatform: '', selected: false },
          ]
        },
        {
          label: '营销账单',
          expanded: false,
          subOptions: [
            { id: 'manual-expunging-cond-2-cb26', label:'自定义营销账单', expanded: false, importChannelPlatform: 'custom_marketing_bill', subBillPlatform: '', selected: false },
          ]
        }
      ]
    }
  ];

  toggleExpand(option: Option) {
    option.expanded = !option.expanded;
  }

  checkboxIdsForCond2: string[] = Array.from({ length: 26 }, (_, i) => `manual-expunging-cond-2-cb${i + 1}`);

  selectAllCheckboxesForCond2(): void {
    this.options.forEach(layer1 => {
      layer1.subOptions?.forEach(layer2 => {
        layer2.subOptions?.forEach(layer3 => {
          layer3.selected = true;
        });
      });
    });
  }

  invertCheckboxSelectionForCond2(): void {
    this.options.forEach(layer1 => {
      layer1.subOptions?.forEach(layer2 => {
        layer2.subOptions?.forEach(layer3 => {
          layer3.selected = !layer3.selected;
        });
      });
    });
  }

  // 3.1, Cond #3
  expunging0301Cond03 = [
    [
      { id: 'expunging-bills-cond-3-rd1', taskStatus: 'all', label: '所有状态', checked: true },
      { id: 'expunging-bills-cond-3-rd2', taskStatus: '0', label: '待执行#0', checked: false },
      { id: 'expunging-bills-cond-3-rd3', taskStatus: '92', label: '待执行#92', checked: false },
      { id: 'expunging-bills-cond-3-rd4', taskStatus: '93', label: '待执行#93', checked: false },
      { id: 'expunging-bills-cond-3-rd5', taskStatus: '94', label: '待执行#94', checked: false },
      { id: 'expunging-bills-cond-3-rd6', taskStatus: '1', label: '执行中', checked: false },
      { id: 'expunging-bills-cond-3-rd7', taskStatus: '2', label: '数据已删除', checked: false },
      { id: 'expunging-bills-cond-3-rd8', taskStatus: '3', label: '任务异常', checked: false },
      { id: 'expunging-bills-cond-3-rd9', taskStatus: '4', label: '任务已完成', checked: false }
    ]
  ];

  // 3.1, Cond #4
  readonly fmt = 'yyyy-LL-dd\'T\'HH:mm';
  maxDateTime: string = DateTime.local().toFormat(this.fmt);  // Example: 2024-11-05T09:08
  startDateTime: string = DateTime.local().startOf('day').toFormat(this.fmt);  // Start of today
  endDateTime: string = this.maxDateTime;
  startInput: HTMLInputElement | null = null;
  endInput: HTMLInputElement | null = null;

  validateDateTime(type: 'start' | 'end'): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }
    if (!this.startInput) {
      this.startInput = document.getElementById('bills-expunging-input-3-1-cond4-start-dt') as HTMLInputElement;
    }
    if (!this.endInput) {
      this.endInput = document.getElementById('bills-expunging-input-3-1-cond4-end-dt') as HTMLInputElement;
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
    const rawTenantIds = (document.getElementById('bills-expunging-input-3-1-tenant-id') as HTMLInputElement).value.trim().split(/, */);
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

    const subBillPlatforms: string[] = [];
    const importChannelPlatforms: string[] = [];
    this.options.forEach(layer1 => {
      layer1.subOptions?.forEach(layer2 => {
        layer2.subOptions?.forEach(layer3 => {
          if (layer3.selected) {
            const sbp = layer3.subBillPlatform;
            if (sbp && sbp !== '') {
              subBillPlatforms.push(`${sbp}`);
            } else {
              importChannelPlatforms.push(`${layer3.importChannelPlatform}`);
            }
          }
        });
      });
    });

    let condSubBillPlatforms: string = '';
    if (subBillPlatforms.length == 1) {
      condSubBillPlatforms = `sub_bill_platform = '${subBillPlatforms[0]}'`;
    } else if (subBillPlatforms.length > 1 && subBillPlatforms.length < this.checkboxIdsForCond2.length) {
      condSubBillPlatforms = `sub_bill_platform IN ('${subBillPlatforms.join('\', \'')}')`;
    }

    let condImportChannelPlatforms: string = '';
    if (importChannelPlatforms.length == 1) {
      condImportChannelPlatforms = `import_channel_platform = '${importChannelPlatforms[0]}'`;
    } else if (importChannelPlatforms.length > 1 && importChannelPlatforms.length < this.checkboxIdsForCond2.length) {
      condImportChannelPlatforms = `import_channel_platform IN ('${importChannelPlatforms.join('\', \'')}')`;
    }

    if (condSubBillPlatforms !== '' && condImportChannelPlatforms !== '') {
      conditions.push(`(${condSubBillPlatforms} OR ${condImportChannelPlatforms})`);
    } else if (condSubBillPlatforms !== '') {
      conditions.push(condSubBillPlatforms);
    } else if (condImportChannelPlatforms !== '') {
      conditions.push(condImportChannelPlatforms);
    }

    const taskStatuses: string[] = [];
    Array.from({length: 9}, (_, i) => `expunging-bills-cond-3-rd${i + 1}`).forEach(id => {
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

    let stmt: string = 'SELECT ' + selects.join(', ') + '\nFROM bill_import_delayed_deletion';
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
  @ViewChild('codeResult0302D') codeResult0302D!: CodeDisplayComponent;

  generatedSQL0302A: string = this.presetStatements[1] + ';';
  generatedSQL0302B: string = this.presetStatements[2] + ';';
  generatedSQL0302C: string = this.presetStatements[3] + ';';
  generatedSQL0302D: string = this.presetStatements[4] + ';';
}
