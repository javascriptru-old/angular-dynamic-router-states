import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'settings', component: AdminSettingsComponent },
    { path: 'billing', component: BillingComponent }
  ] },
];


@NgModule({
  declarations: [
    AdminComponent,
    AdminSettingsComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
