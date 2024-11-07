import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsExpungingComponent } from './sidebar-menu/bills/expunging/bills-expunging.component';
import { BillsManualComponent } from './sidebar-menu/bills/manual/bills-manual.component';
import { ExpensesItemsComponent } from './sidebar-menu/expenses/items/expenses-items.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { Client404Component } from './status-codes/client-404/client-404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bienvenue', pathMatch: 'full' },
  { path: 'bienvenue', component: BienvenueComponent },
  { path: 'nvg-menu-bills-manual', component: BillsManualComponent },
  { path: 'nvg-menu-bills-expunging', component: BillsExpungingComponent },
  { path: 'nvg-menu-expenses-items', component: ExpensesItemsComponent },
  { path: '**', component: Client404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
