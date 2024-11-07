import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
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
      expanded: false,
      subfuncs: [
        {
          id: 'menu-bills-manual',
          name: '手动拉取任务'
        },
        {
          id: 'menu-bills-expunging',
          name: '账单删除任务'
        }
      ]
    },
    {
      id: 'menu-expenses',
      name: '费用模块',
      expanded: false,
      subfuncs: [
        {
          id: 'menu-expenses-items',
          name: '费用项'
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
