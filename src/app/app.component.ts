import { Component, NgModule, Compiler } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { AdminModule } from './admin.module'
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'app-root',
  template: `
  
  <button (click)="loadMore()">Load more</button>

<a routerLink="">Home</a>
<a routerLink="settings">Settigns</a>
<a *ngIf="isAdminShown" routerLink="admin">Admin</a>

<router-outlet></router-outlet>

  `
})
export class AppComponent {
  isAdminShown = false;

  constructor(private router: Router, private compiler: Compiler) {}

  loadMore() {
    this.isAdminShown = true;

    this.compiler.compileModuleAsync(AdminModule).then(ngModuleFactory => {
      const route: Route = {
        path: 'admin',
        loadChildren: () => {
          return ngModuleFactory;
        }
      };
      this.router.resetConfig([route, ...this.router.config]);
    });
  }
}
