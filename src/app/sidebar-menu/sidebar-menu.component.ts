import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  funcs = [
    {
      id: 'menu-bills',
      name: '账单模块',
      expanded: true,
      subfuncs: [
        {
          id: 'menu-bills-manual',
          name: '手动拉取任务'
        },
        {
          id: 'menu-bills-expunging',
          name: '账单删除任务'
        },
        {
          id: 'menu-bills-live-broadcast',
          name: '直播账单'
        },
        {
          id: 'menu-bills-logs',
          name: '操作日志'  // 账单和授权日志
        }
      ]
    },
    {
      id: 'menu-expenses',
      name: '费用模块',
      expanded: true,
      subfuncs: [
        {
          id: 'menu-expenses-items',
          name: '费用项'
        }
      ]
    },
    {
      id: 'menu-utilities',
      name: '实用工具',
      expanded: true,
      subfuncs: [
        {
          id: 'menu-utilities-guidance',
          name: '博文撰写样式推荐'
        },
        {
          id: 'menu-utilities-gen-insert-into',
          name: 'INSERT-INTO 生成器'
        }
      ]
    },
    {
      id: 'menu-others',
      name: '其他',
      expanded: true,
      subfuncs: [
        {
          id: 'menu-others-declarations',
          name: '开源组件声明'
        },
        {
          id: 'menu-others-about',
          name: '关于'
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  onAnyOfMenuClick(func: any) {
    this.router.navigate(['/nvg-' + func.id]);
  }

  toggleExpand(func: any) {
    func.expanded = !func.expanded;
  }
}
