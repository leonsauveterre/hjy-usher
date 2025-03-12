import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsExpungingComponent } from './sidebar-menu/bills/expunging/bills-expunging.component';
import { BillsManualComponent } from './sidebar-menu/bills/manual/bills-manual.component';
import { ExpensesItemsComponent } from './sidebar-menu/expenses/items/expenses-items.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { Client404Component } from './status-codes/client-404/client-404.component';
import { BillsLiveBroadcastComponent } from './sidebar-menu/bills/live-broadcast/bills-live-broadcast.component';
import { BillsLogsComponent } from './sidebar-menu/bills/logs/bills-logs.component';
import { UtilitiesGuidanceComponent } from './sidebar-menu/utilities/guidance/utilities-guidance.component';
import { UtilitiesGenInsertIntoComponent } from './sidebar-menu/utilities/gen-insert-into/utilities-gen-insert-into.component';
import { UtilitiesRawRetrievalComponent } from './sidebar-menu/utilities/raw-retrieval/utilities-raw-retrieval.component';
import { UtilitiesConcentrationComponent } from './sidebar-menu/utilities/concentration/utilities-concentration.component';
import { OthersDeclarationsComponent } from './sidebar-menu/others/declarations/others-declarations.component';
import { OthersAboutComponent } from './sidebar-menu/others/about/others-about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bienvenue', pathMatch: 'full' },
  { path: 'bienvenue', component: BienvenueComponent },
  { path: 'nvg-menu-bills-manual', component: BillsManualComponent },
  { path: 'nvg-menu-bills-expunging', component: BillsExpungingComponent },
  { path: 'nvg-menu-bills-live-broadcast', component: BillsLiveBroadcastComponent },
  { path: 'nvg-menu-bills-logs', component: BillsLogsComponent },
  { path: 'nvg-menu-expenses-items', component: ExpensesItemsComponent },
  { path: 'nvg-menu-utilities-guidance', component: UtilitiesGuidanceComponent },
  { path: 'nvg-menu-utilities-gen-insert-into', component: UtilitiesGenInsertIntoComponent },
  { path: 'nvg-menu-utilities-raw-retrieval', component: UtilitiesRawRetrievalComponent },
  { path: 'nvg-menu-utilities-concentration', component: UtilitiesConcentrationComponent },
  { path: 'nvg-menu-others-declarations', component: OthersDeclarationsComponent },
  { path: 'nvg-menu-others-about', component: OthersAboutComponent },
  { path: '**', component: Client404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
