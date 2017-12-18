import { Component,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  templateUrl: './home.landing.html'
})

export class HomeLanding {
  title = 'Home';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public message() {
    this.toastr.success("Toastr Good!")
  }
}