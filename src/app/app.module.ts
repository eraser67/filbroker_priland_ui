// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Toastr
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

// Wijmo
import * as wjGrid from 'wijmo/wijmo.angular2.grid';

// My Components
import { AppComponent } from './app.component';
import { HomeLanding } from './home/home.landing';
import { AccountLogin } from './account/account.login';
import { MenuIndex } from './menu/menu.index';
import { ProjectList } from './project/project.list';

// My Services
import { AccountService } from './account/account.service';

const routes: Routes = [
  {
    path: '',
    component: HomeLanding
  },
  {
      path: 'account/login',
      component: AccountLogin
  },
  {
    path: 'menu',
    component: MenuIndex
  },
  {
      path: 'project',
      component: ProjectList
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeLanding,
    AccountLogin,
    MenuIndex,
    ProjectList,
    wjGrid.WjFlexGrid
  ],
  imports: [
    RouterModule.forRoot(routes),
    ToastModule.forRoot(),
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})

export class AppModule { }
