import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


import { AppComponent } from './app.component';
import { HomeLanding } from './home/home.landing';
import { AccountLogin } from './account/account.login';

import { AccountService } from './account/account.service';

const routes: Routes = [
  {
      path: 'account/login',
      component: AccountLogin
  },
  {
      path: '',
      component: HomeLanding
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeLanding,
    AccountLogin
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
