/*
    *
    * Wijmo Library 5.20173.380
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}();define(["require","exports","wijmo/wijmo.grid.grouppanel","@angular/core","@angular/core","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(e,t,o,r,n,i,a,u,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wjGroupPanelMeta={selector:"wj-group-panel",template:"",inputs:["wjModelProperty","isDisabled","hideGroupedColumns","maxGroups","placeholder","grid"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus"],providers:[{provide:u.NG_VALUE_ACCESSOR,useFactory:s.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]};var p=function(e){function o(t,o,r){var n=e.call(this,s.WjDirectiveBehavior.getHostElement(t,o))||this;n.isInitialized=!1;n._wjBehaviour=s.WjDirectiveBehavior.attach(n,t,o,r);return n.created(),n}return __extends(o,e),o.prototype.created=function(){},o.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},o.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},o.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},o.prototype.addEventListener=function(t,o,r,n){var i=this;void 0===n&&(n=!1);var a=s.WjDirectiveBehavior,u=a.ngZone;u&&a.outsideZoneEvents[o]?u.runOutsideAngular(function(){e.prototype.addEventListener.call(i,t,o,r,n)}):e.prototype.addEventListener.call(this,t,o,r,n)},o.meta={outputs:t.wjGroupPanelMeta.outputs},o.decorators=[{type:r.Component,args:[{selector:t.wjGroupPanelMeta.selector,template:t.wjGroupPanelMeta.template,inputs:t.wjGroupPanelMeta.inputs,outputs:t.wjGroupPanelMeta.outputs,providers:[{provide:"WjComponent",useExisting:n.forwardRef(function(){return o})}].concat(t.wjGroupPanelMeta.providers)}]}],o.ctorParameters=function(){return[{type:n.ElementRef,decorators:[{type:i.Inject,args:[n.ElementRef]}]},{type:n.Injector,decorators:[{type:i.Inject,args:[n.Injector]}]},{type:void 0,decorators:[{type:i.Inject,args:["WjComponent"]},{type:i.SkipSelf},{type:n.Optional}]}]},o}(o.GroupPanel);t.WjGroupPanel=p;var c=[p],l=function(){function e(){}return e.decorators=[{type:r.NgModule,args:[{imports:[s.WjDirectiveBaseModule,a.CommonModule],declarations:c.slice(),exports:c.slice()}]}],e.ctorParameters=function(){return[]},e}();t.WjGridGrouppanelModule=l});