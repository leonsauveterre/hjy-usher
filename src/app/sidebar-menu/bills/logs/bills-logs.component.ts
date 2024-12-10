import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

interface SimpleLog {
  identifier: string;
  description: string;
}

interface ComplexLog {
  identifier: string;
  scene: string;
  platformAlias: string;
  category: string
}

@Component({
  selector: 'app-logs',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './bills-logs.component.html',
  styleUrl: './bills-logs.component.css'
})
export class BillsLogsComponent {
  searchTerm: string = '';  // opTypes
  searchTerm2: string = '';  // opSummaries
  searchTerm3: string = '';  // authTypes
  searchTerm4: string = '';  // authSummaries
  selectedCategory: string = '';

  readonly opTypes: Array<ComplexLog> = [
    { identifier: 'c1', scene: '支付宝账单', platformAlias: 'alipay_money', category: '资金账单' },
    { identifier: 'd1', scene: '京东商城货款账单', platformAlias: 'jd_money', category: '资金账单' },
    { identifier: 'd2', scene: '京东钱包', platformAlias: 'jd_money', category: '资金账单' },
    { identifier: 'e1', scene: '拼多多货款账单', platformAlias: 'pdd_money', category: '资金账单' },
    { identifier: 'e2', scene: '百亿补贴结算账单', platformAlias: 'pdd_money', category: '资金账单' },
    { identifier: 'f0', scene: '小米有品', platformAlias: 'xmyp_money', category: '资金账单' },
    { identifier: 'f1', scene: '小米有品-运费免邮表', platformAlias: 'xmyp_money', category: '资金账单' },
    { identifier: 'f2', scene: '小米有品-奖惩罚金', platformAlias: 'xmyp_money', category: '资金账单' },
    { identifier: 'f3', scene: '小米有品-手续费明细', platformAlias: 'xmyp_money', category: '资金账单' },
    { identifier: 'f4', scene: '小米有品-贷款结算单', platformAlias: 'xmyp_money', category: '资金账单' },
    { identifier: 'g1', scene: '快手小店', platformAlias: 'kuaishou_money', category: '资金账单' },
    { identifier: 'g2', scene: '快手超售后期账单', platformAlias: 'kuaishou_money', category: '资金账单' },
    { identifier: 'g3', scene: '快手安心钱包', platformAlias: 'kuaishou_money', category: '资金账单' },
    { identifier: 'h1', scene: '抖店（放心购）', platformAlias: 'doudian_money', category: '资金账单' },
    { identifier: 'm1', scene: '视频号资金流水', platformAlias: '83', category: '资金账单' },
    { identifier: 'i1', scene: '小红书订单货款', platformAlias: '56', category: '资金账单' },
    { identifier: 'i2', scene: '小红书其他服务款', platformAlias: '56', category: '资金账单' },
    { identifier: 'i3', scene: '小红书人工调账', platformAlias: '56', category: '资金账单' },
    { identifier: 'b1', scene: '引力魔方', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'b2', scene: '明星店铺', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'b3', scene: '万相台', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'b4', scene: '万相台无界', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'b5', scene: '直通车', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'b6', scene: '全站推广', platformAlias: 'alipay_money', category: '营销账单' },
    { identifier: 'p0', scene: '多多搜索', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p1', scene: '明星店铺', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p2', scene: '多多场景', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p3', scene: '全站推广', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p4', scene: '标准推广', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p5', scene: '直播推广', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p6', scene: '商品推广', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'p7', scene: '红包发放', platformAlias: 'pdd_money', category: '营销账单' },
    { identifier: 'j1', scene: '京准通', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j2', scene: '互动广告', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j3', scene: '京东直投', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j4', scene: '推荐广告', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j5', scene: '智能投放', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j6', scene: '搜索快车', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'j7', scene: '搜索快车新接口', platformAlias: 'jd_money', category: '营销账单' },
    { identifier: 'k1', scene: '抖音巨量千川-标准推广', platformAlias: 'doudian_money', category: '直播账单' },
    { identifier: 'k2', scene: '抖音巨量千川-全域推广', platformAlias: 'doudian_money', category: '直播账单' }
  ];

  readonly opSummaries: Array<SimpleLog> = [
    { identifier: 'b1', description: '账单导入' },
    { identifier: 'b2', description: '账单已审核' },
    { identifier: 'b3', description: '账单已完成' },
    { identifier: 'b4', description: '账单删除中' },
    { identifier: 'b5', description: '账单已删除' },
    { identifier: 'b6', description: '账单分摊中' },
    { identifier: 'c1', description: '手动执行账单分类' },
    { identifier: 'c2', description: '手动刷新账单分类' },
    { identifier: 'c3', description: '执行账单分类完成' },
    { identifier: 'c4', description: '刷新账单分类完成' },
    { identifier: 'd1', description: '系统拉取账单开始' },
    { identifier: 'd2', description: '手动拉取账单开始' },
    { identifier: 'd3', description: '系统拉取账单完成' },
    { identifier: 'd4', description: '手动拉取账单完成' },
    { identifier: 'd5', description: '系统拉取账单失败' },
    { identifier: 'e1', description: '手动分配店铺' },
    { identifier: 'e2', description: '手动分类费用项' },
    { identifier: 'e3', description: '手动分类费用项-分类开始' },
    { identifier: 'e4', description: '手动分类费用项-分摊结束' },
    { identifier: 'e5', description: '费用项分摊开始' },
    { identifier: 'e6', description: '费用项分摊完成' },
    { identifier: 'h0', description: '手动调整异常任务状态' }
  ];

  readonly authTypes: Array<SimpleLog> = [
    { identifier: '1', description: '店铺操作' },
    { identifier: '2', description: '资金账单' },
    { identifier: '3', description: '营销账单' },
    { identifier: '4', description: '其他账单' },
  ];

  readonly authSummaries: Array<SimpleLog> = [
    { identifier: 's1', description: '启用店铺' },
    { identifier: 's2', description: '停用店铺' },
    { identifier: 's3', description: '编辑资金账号ID' },
    { identifier: 's4', description: '编辑营销账号ID' },
    { identifier: 'b1', description: '资金账单授权成功' },
    { identifier: 'b2', description: '编辑资金账号ID，授权失效' },
    { identifier: 'b3', description: '资金账单授权失败' },
    { identifier: 'b4', description: '资金账单取消授权' },
    { identifier: 'b5', description: '系统拉取账单失败：资金账单授权失效' },
    { identifier: 'b6', description: '手动拉取账单失败：资金账单授权失效' },
    { identifier: 'b7', description: '授权校验：资金账单授权失效' },
    { identifier: 'm1', description: '营销账单授权成功' },
    { identifier: 'm2', description: '编辑营销账号ID，授权失效' },
    { identifier: 'm3', description: '营销账单授权失败' },
    { identifier: 'm4', description: '营销账单取消授权' },
    { identifier: 'm5', description: '系统拉取账单失败：营销账单授权失效' },
    { identifier: 'm6', description: '手动拉取账单失败：营销账单授权失效' },
    { identifier: 'm7', description: '授权校验：营销账单授权失效' },
    { identifier: 'u1', description: '系统拉取账单失败：其他账单授权失效' },
    { identifier: 'u2', description: '手动拉取账单失败：其他账单授权失效' }
  ];

  speedDialTo(target: 'op-type' | 'op-summary' | 'auth-type' | 'auth-summary'): void {
    const dest = document.getElementById('scroll-to-' + target);
    if (dest) {
      dest.scrollIntoView({ behavior: 'smooth' });
    }
  };

  private filterSimpleLogs(source: SimpleLog[], searchTerm: string): SimpleLog[] {
    return source.filter(e => {
      return searchTerm
        ? (
          e.identifier.toLowerCase().includes(searchTerm.toLowerCase())
          || e.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) : true;
    });
  }

  // op - types
  opCategories: string[] = Array.from(new Set(this.opTypes.map(log => log.category)));

  get filterOpTypes(): ComplexLog[] {
    return this.opTypes.filter(e => {
      const matchesSearch = this.searchTerm
        ? (
          e.identifier.toLowerCase().includes(this.searchTerm.toLowerCase())
            || e.scene.toLowerCase().includes(this.searchTerm.toLowerCase())
            || e.platformAlias.toLowerCase().includes(this.searchTerm.toLowerCase())
            || e.category.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) : true;
      const matchesCategory = this.selectedCategory ? e.category === this.selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }

  // op - summaries
  get filterOpSummaries(): SimpleLog[] {
    return this.filterSimpleLogs(this.opSummaries, this.searchTerm2);
  }

  // auth - types
  get filterAuthTypes(): SimpleLog[] {
    return this.filterSimpleLogs(this.authTypes, this.searchTerm3);
  }

  // auth - summaries
  get filterAuthSummaries(): SimpleLog[] {
    return this.filterSimpleLogs(this.authSummaries, this.searchTerm4);
  }
}
