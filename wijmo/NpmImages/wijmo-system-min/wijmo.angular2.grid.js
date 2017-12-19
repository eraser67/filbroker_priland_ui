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
System.register(["wijmo/wijmo.grid","wijmo/wijmo","@angular/core","@angular/common","@angular/forms","wijmo/wijmo.angular2.directiveBase"],function(e,t){"use strict";function o(){var e,t;return(e=window.wijmo)&&(t=e.grid)&&t.detail}function n(){var e;return(e=window.wijmo)&&e.input}var i,r,l,a,s,d,u,p,c,g,f,m,C,v,h,w,y,E=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();t&&t.id;return{setters:[function(e){i=e},function(e){r=e},function(e){l=e,a=e,s=e},function(e){d=e},function(e){u=e},function(e){p=e}],execute:function(){e("wjFlexGridMeta",c={selector:"wj-flex-grid",template:"<div><ng-content></ng-content></div>",inputs:["wjModelProperty","isDisabled","newRowAtTop","allowAddNew","allowDelete","allowDragging","allowMerging","allowResizing","allowSorting","quickAutoSize","autoSizeMode","autoGenerateColumns","childItemsPath","groupHeaderFormat","headersVisibility","showSelectedHeaders","showMarquee","itemFormatter","isReadOnly","imeEnabled","mergeManager","selectionMode","showGroups","showSort","showDropDown","showAlternatingRows","showErrors","validateEdits","treeIndent","itemsSource","autoClipboard","frozenRows","frozenColumns","cloneFrozenCells","deferResizing","sortRowIndex","stickyHeaders","preserveSelectedState","preserveOutlineState","keyActionTab","keyActionEnter","rowHeaderPath","virtualizationThreshold"],outputs:["initialized","gotFocusNg: gotFocus","lostFocusNg: lostFocus","beginningEditNg: beginningEdit","cellEditEndedNg: cellEditEnded","cellEditEndingNg: cellEditEnding","prepareCellForEditNg: prepareCellForEdit","formatItemNg: formatItem","resizingColumnNg: resizingColumn","resizedColumnNg: resizedColumn","autoSizingColumnNg: autoSizingColumn","autoSizedColumnNg: autoSizedColumn","draggingColumnNg: draggingColumn","draggingColumnOverNg: draggingColumnOver","draggedColumnNg: draggedColumn","sortingColumnNg: sortingColumn","sortedColumnNg: sortedColumn","resizingRowNg: resizingRow","resizedRowNg: resizedRow","autoSizingRowNg: autoSizingRow","autoSizedRowNg: autoSizedRow","draggingRowNg: draggingRow","draggingRowOverNg: draggingRowOver","draggedRowNg: draggedRow","deletingRowNg: deletingRow","deletedRowNg: deletedRow","loadingRowsNg: loadingRows","loadedRowsNg: loadedRows","rowEditStartingNg: rowEditStarting","rowEditStartedNg: rowEditStarted","rowEditEndingNg: rowEditEnding","rowEditEndedNg: rowEditEnded","rowAddedNg: rowAdded","groupCollapsedChangedNg: groupCollapsedChanged","groupCollapsedChangingNg: groupCollapsedChanging","itemsSourceChangedNg: itemsSourceChanged","selectionChangingNg: selectionChanging","selectionChangedNg: selectionChanged","scrollPositionChangedNg: scrollPositionChanged","updatingViewNg: updatingView","updatedViewNg: updatedView","updatingLayoutNg: updatingLayout","updatedLayoutNg: updatedLayout","pastingNg: pasting","pastedNg: pasted","pastingCellNg: pastingCell","pastedCellNg: pastedCell","copyingNg: copying","copiedNg: copied"],providers:[{provide:u.NG_VALUE_ACCESSOR,useFactory:p.WjValueAccessorFactory,multi:!0,deps:["WjComponent"]}]}),g=function(e){function t(t,o,n,i){var l=e.call(this,p.WjDirectiveBehavior.getHostElement(t,o))||this;l.isInitialized=!1;l._wjBehaviour=p.WjDirectiveBehavior.attach(l,t,o,n);return new h(l,i),l.deferUpdate(function(){if(l.rows.defaultSize<10){var e=l.hostElement,t=getComputedStyle(e),o=getComputedStyle(document.body),n=2*parseInt(t.fontSize&&r.contains(document.body,e)?t.fontSize:o.fontSize);l.rows.defaultSize=n,l.columns.defaultSize=4*n,l.columnHeaders.rows.defaultSize=n,l.rowHeaders.columns.defaultSize=Math.round(1.25*n)}}),l.created(),l}return E(t,e),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.prototype.addEventListener=function(t,o,n,i){var r=this;void 0===i&&(i=!1);var l=p.WjDirectiveBehavior,a=l.ngZone;a&&l.outsideZoneEvents[o]?a.runOutsideAngular(function(){e.prototype.addEventListener.call(r,t,o,n,i)}):e.prototype.addEventListener.call(this,t,o,n,i)},t.meta={outputs:c.outputs},t.decorators=[{type:l.Component,args:[{selector:c.selector,template:c.template,inputs:c.inputs,outputs:c.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return t})}].concat(c.providers)}]}],t.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:s.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:s.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:s.Inject,args:["WjComponent"]},{type:s.SkipSelf},{type:a.Optional}]},{type:s.ChangeDetectorRef,decorators:[{type:s.Inject,args:[s.ChangeDetectorRef]}]}]},t}(i.FlexGrid),e("WjFlexGrid",g),e("wjFlexGridColumnMeta",f={selector:"wj-flex-grid-column",template:"<div><ng-content></ng-content></div>",inputs:["asyncBindings","wjProperty","name","dataMap","dataType","binding","sortMemberPath","format","header","width","maxLength","minWidth","maxWidth","align","allowDragging","allowSorting","allowResizing","allowMerging","aggregate","isReadOnly","cssClass","isContentHtml","isSelected","visible","wordWrap","mask","inputType","isRequired","showDropDown","dropDownCssClass","quickAutoSize"],outputs:["initialized","isSelectedChangePC: isSelectedChange"],providers:[]}),m=function(e){function t(t,o,n){var i=e.call(this)||this;i.isInitialized=!1,i.wjProperty="columns";var r=(i._wjBehaviour=p.WjDirectiveBehavior.attach(i,t,o,n)).parentBehavior.directive;return r.autoGenerateColumns&&(r.autoGenerateColumns=!1,r.columns.clear()),i.created(),i}return E(t,e),t.prototype.created=function(){},t.prototype.ngOnInit=function(){this._wjBehaviour.ngOnInit()},t.prototype.ngAfterViewInit=function(){this._wjBehaviour.ngAfterViewInit()},t.prototype.ngOnDestroy=function(){this._wjBehaviour.ngOnDestroy()},t.meta={outputs:f.outputs,changeEvents:{"grid.selectionChanged":["isSelected"]}},t.decorators=[{type:l.Component,args:[{selector:f.selector,template:f.template,inputs:f.inputs,outputs:f.outputs,providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return t})}].concat(f.providers)}]}],t.ctorParameters=function(){return[{type:a.ElementRef,decorators:[{type:s.Inject,args:[a.ElementRef]}]},{type:a.Injector,decorators:[{type:s.Inject,args:[a.Injector]}]},{type:void 0,decorators:[{type:s.Inject,args:["WjComponent"]},{type:s.SkipSelf},{type:a.Optional}]}]},t}(i.Column),e("WjFlexGridColumn",m),C=function(){function e(e,t,o,n,i,r,l){this.viewContainerRef=e,this.templateRef=t,this.elRef=o,this.domRenderer=i,this.cdRef=l,this.autoSizeRows=!0,this.forceFullEdit=!0,n instanceof g?this.grid=n:n instanceof m&&(this.column=n,this.grid=p.WjDirectiveBehavior.getBehavior(n).parentBehavior.directive)}return e._getTemplContextProp=function(e){return"$__cellTempl"+v[e]},e.prototype.ngOnInit=function(){this.ownerControl=this.column&&this.column.grid===this.grid?this.column:this.grid,this._attachToControl()},e.prototype.ngOnDestroy=function(){this.cellTypeStr&&(this.viewContainerRef.clear(),this.ownerControl[e._getTemplContextProp(this.cellType)]=null,this.grid.invalidate())},e.prototype._instantiateTemplate=function(e,t){return p.WjDirectiveBehavior.instantiateTemplate(e,this.viewContainerRef,this.templateRef,this.domRenderer,!1,t)},e.prototype._attachToControl=function(){if(this.cellTypeStr){var t=this.cellType=r.asEnum(this.cellTypeStr,v),o=this.ownerControl;o[e._getTemplContextProp(t)]=this,o instanceof i.Column&&(t===v.Cell||t===v.ColumnHeader||t===v.ColumnFooter)&&o._setFlag(i.RowColFlags.HasTemplate,!0),this.grid.invalidate()}},e.decorators=[{type:a.Directive,args:[{selector:"[wjFlexGridCellTemplate]",inputs:["wjFlexGridCellTemplate","cellTypeStr: cellType","cellOverflow","valuePaths","autoSizeRows","forceFullEdit"],exportAs:"wjFlexGridCellTemplate",providers:[{provide:"WjComponent",useExisting:a.forwardRef(function(){return e})}]}]}],e.ctorParameters=function(){return[{type:a.ViewContainerRef,decorators:[{type:s.Inject,args:[a.ViewContainerRef]}]},{type:a.TemplateRef,decorators:[{type:s.Inject,args:[a.TemplateRef]},{type:a.Optional}]},{type:a.ElementRef,decorators:[{type:s.Inject,args:[a.ElementRef]}]},{type:void 0,decorators:[{type:s.Inject,args:["WjComponent"]},{type:s.SkipSelf},{type:a.Optional}]},{type:a.Renderer,decorators:[{type:s.Inject,args:[a.Renderer]}]},{type:a.Injector,decorators:[{type:s.Inject,args:[a.Injector]}]},{type:s.ChangeDetectorRef,decorators:[{type:s.Inject,args:[s.ChangeDetectorRef]}]}]},e}(),e("WjFlexGridCellTemplate",C),function(e){e[e.Cell=0]="Cell",e[e.CellEdit=1]="CellEdit",e[e.ColumnHeader=2]="ColumnHeader",e[e.RowHeader=3]="RowHeader",e[e.RowHeaderEdit=4]="RowHeaderEdit",e[e.TopLeft=5]="TopLeft",e[e.GroupHeader=6]="GroupHeader",e[e.Group=7]="Group",e[e.NewCellTemplate=8]="NewCellTemplate",e[e.ColumnFooter=9]="ColumnFooter",e[e.BottomLeft=10]="BottomLeft"}(v||(v={})),e("CellTemplateType",v),h=function(e){function t(o,n){var i=e.call(this)||this;if(i._needsCdCheck=!1,i._lastApplyTimeStamp=0,i._noApplyLag=!1,i._startingEditing=!1,i._cellStampCounter=0,i._composing=!1,i.grid=o,i._gridCdRef=n,!t._templateTypes){t._templateTypes=[];for(var r in v)isNaN(r)&&t._templateTypes.push(r)}var l=i;return i._baseCf=o.cellFactory,o.cellFactory=i,i._evtInput=document.createEvent("HTMLEvents"),i._evtInput.initEvent("input",!0,!1),i._evtBlur=document.createEvent("HTMLEvents"),i._evtBlur.initEvent("blur",!1,!1),o.prepareCellForEdit.addHandler(function(e,t){l._noApplyLag=!0}),o.cellEditEnded.addHandler(function(e,t){(t.range.col<0||t.range.col<o.columns.length&&!o.columns[t.range.col][C._getTemplContextProp(v.CellEdit)])&&(l._editChar=null),setTimeout(function(){l._noApplyLag=!1},300)}),o.beginningEdit.addHandler(function(e,t){l._startingEditing=!0}),o.hostElement.addEventListener("keydown",function(e){l._startingEditing=!1},!0),o.hostElement.addEventListener("keypress",function(e){var t=e.charCode>32?String.fromCharCode(e.charCode):null;t&&(!o.activeEditor||l._startingEditing?l._editChar=t:l._editChar&&(l._editChar+=t))},!0),o.hostElement.addEventListener("compositionstart",function(e){l._composing=!0},!0),o.hostElement.addEventListener("compositionend",function(e){l._composing=!1},!0),o.updatedView.addHandler(function(){i._needsCdCheck&&(i._needsCdCheck=!1,i._gridCdRef.markForCheck())},i),i}return E(t,e),t.prototype.updateCell=function(e,l,a,s,d){var u=this;this._cellStampCounter=(this._cellStampCounter+1)%1e7;var p=s[t._cellStampProp]=this._cellStampCounter;s.style.overflow&&(s.style.overflow="");var c,g=this,f=e.grid,m=f.editRange,h=e.rows[l],w=h.dataItem,y=!1,E=!1,_=!1,R=!1;switch(e.cellType){case i.CellType.Cell:if(m&&m.row===l&&m.col===a)c=v.CellEdit,E=_=!0;else if(h instanceof i.GroupRow){var S=!((R=w instanceof r.CollectionViewGroup)||h.hasChildren);a==e.columns.firstVisibleIndex?c=S?v.Cell:v.GroupHeader:(c=S?v.Cell:v.Group,E=!0)}else h instanceof i._NewRowTemplate?c=v.NewCellTemplate:o()&&o().DetailRow&&h instanceof o().DetailRow||(c=v.Cell);break;case i.CellType.ColumnHeader:c=v.ColumnHeader;break;case i.CellType.RowHeader:c=f.collectionView&&f.collectionView.currentEditItem===w?v.RowHeaderEdit:v.RowHeader,y=!0;break;case i.CellType.TopLeft:c=v.TopLeft,y=!0;break;case i.CellType.ColumnFooter:c=v.ColumnFooter,E=!0;break;case i.CellType.BottomLeft:c=v.BottomLeft,y=!0}var j=!1;if(null!=c){var T=R&&c==v.GroupHeader?f.columns.getColumn(w.groupDescription.propertyName):a>=0&&a<e.columns.length?e.columns[a]:null;if(T){var I=C._getTemplContextProp(c),N=(y?f:T)[I];if(N||(c===v.RowHeaderEdit?(c=v.RowHeader,I=C._getTemplContextProp(c),N=f[I]):c!==v.Group&&c!==v.GroupHeader||R||(c=v.Cell,I=C._getTemplContextProp(c),N=T[I])),N){var H;E&&(H=e.getCellData(l,a,!1)),j=!0;var x=s.getAttribute(i.FlexGrid._WJS_MEASURE),z=x&&"true"===x.toLowerCase();_&&this._baseCf.updateCell(e,l,a,s,d,!0);var F,D=s[I]||{},b=D.column!==T||!D.viewRef||D.templateContextProperty!==I||s.firstChild!=D.rootElement,O=_&&this._composing&&f.imeEnabled;if(b){if(_){var P=s.firstElementChild;P&&(O||s.focus(),P.style.display="none")}else s.textContent="";this._doDisposeCell(s);var V={};F=this._setViewRefContext(V,h,T,w,H,N.valuePaths);var B=N._instantiateTemplate(s,V);D.column=T,D.viewRef=B.viewRef,D.rootElement=B.rootElement,D.templateContextProperty=I,s[I]=D}else F=this._setViewRefContext(D.viewRef.context,h,T,w,H,N.valuePaths);if(N.cellOverflow&&(s.style.overflow=N.cellOverflow),z?N.cdRef.detectChanges():N.autoSizeRows&&!O?setTimeout(function(){if(p===s[t._cellStampProp]){var o=s.scrollHeight,n=e.rows,i=d&&d.rowSpan||1;if(l<n.length&&n[l].renderHeight*i<o-1){if(n.defaultSize=o/i,_){var r=g._isFullEdit();return f.refresh(),void f.startEditing(r)}}else _&&u._initEditInput(D,N,null)}},0):_&&setTimeout(function(){O?u._initImeEditInput(D,N):u._initEditInput(D,N,null)},0),_){g._cellEditorVars=F.localVars;var L=function(e,t){if(f.cellEditEnding.removeHandler(L),!t.stayInEditMode){var o=r.getActiveElement();o&&o.dispatchEvent(g._evtBlur),s.focus()}if(g._triggerEditorEvents(s),!t.cancel&&!t.stayInEditMode)for(var i=F.localVars,l=0,a=Object.getOwnPropertyNames(F.bindings);l<a.length;l++){var d=a[l];F.bindings[d].setValue(i,F.localVars.values[d])}var u=s.querySelectorAll(".wj-dropdown");[].forEach.call(u,function(e){var t=r.Control.getControl(e);t&&n()&&t instanceof n().DropDown&&(t.isDroppedDown=!1)})},A=function(e,t){f.cellEditEnded.removeHandler(A),g._cellEditorVars=null};f.cellEditEnding.addHandler(L),f.cellEditEnded.addHandler(A)}else this._baseCf.updateCell(e,l,a,s,d,!1)}}}j||(this._doDisposeCell(s),this._baseCf.updateCell(e,l,a,s,d))},t.prototype.getEditorValue=function(t){if(this._cellEditorVars){var o=t.editRange;return o&&o.isValid&&this._triggerEditorEvents(t.cells.getCellElement(o.row,o.col)),this._cellEditorVars.value}return e.prototype.getEditorValue.call(this,t)},t.prototype.disposeCell=function(e){this._doDisposeCell(e)},t.prototype._doDisposeCell=function(e){for(var o=t._templateTypes,n=0;n<o.length;n++){var i=C._getTemplContextProp(v[o[n]]),r=e[i];if(r&&r.viewRef){var l=(r.column||this.grid)[i];if(l){var a=l.viewContainerRef.indexOf(r.viewRef);a>-1&&l.viewContainerRef.remove(a)}r.viewRef=null,r.rootElement=null,r.column=null,r.templateContextProperty=null,e[i]=null}}},t.prototype._setViewRefContext=function(e,t,o,n,i,l){this._needsCdCheck=!0,e.row=t,e.col=o,e.item=n;var a={},s=e.cell||{},d={},u={localVars:s,bindings:d};if(s.row=t,s.col=o,s.item=n,s.value=i,s.values=a,l)for(var p=0,c=Object.getOwnPropertyNames(l);p<c.length;p++){var g=c[p],f=new r.Binding(l[g]);d[g]=f,a[g]=f.getValue(s)}return e.cell!==s&&(e.cell=s),u},t.prototype._initEditInput=function(e,t,o){var n=this;this._setFullEdit(t);var i=this._findInitialInput(e);if(i){var l=window.getComputedStyle(i);if("none"!==l.display&&"visible"===l.visibility){var a=function(){i.removeEventListener("focus",a),setTimeout(function(){setTimeout(function(){var e=null!=o?o:n._editChar;if(e){var t=i.selectionStart+e.length;i.value=e,n._editChar=null,i.dispatchEvent(n._evtInput),setTimeout(function(){setTimeout(function(){r.setSelectionRange(i,Math.min(t,i.value.length),i.value.length)},0)},0)}},0)},0)};i.addEventListener("focus",a),i.focus()}}},t.prototype._initImeEditInput=function(e,t){var o=this,n=r.getActiveElement();if(n&&n instanceof HTMLInputElement&&r.hasClass(n,"wj-grid-ime")){var l=function(a){n.removeEventListener("compositionend",l),r.setCss(n,i._ImeHandler._cssHidden),o._initEditInput(e,t,n.value)};n.addEventListener("compositionend",l);var a=this._findInitialInput(e);if(a){var s=a.getBoundingClientRect(),d=n.getBoundingClientRect(),u=window.getComputedStyle(n),p=parseFloat(u.left),c=parseFloat(u.top);r.setCss(n,{left:p+s.left-d.left+"px",top:c+s.top-d.top+"px",width:s.width+"px",height:s.height+"px"})}}},t.prototype._findInitialInput=function(e){var t=e&&e.rootElement&&e.rootElement.querySelectorAll("input");if(t)for(var o=0;o<t.length;o++){var n=t[o],i=window.getComputedStyle(n);if("none"!==i.display&&"visible"===i.visibility)return n}return null},t.prototype._triggerEditorEvents=function(e){if(e)for(var t=e.querySelectorAll(".wj-control"),o=0;o<t.length;o++){var n=t[o],i=r.Control.getControl(n);if(i){var l=p.WjDirectiveBehavior.getBehavior(i);l&&l.flushPendingEvents()}}},t.prototype._isFullEdit=function(){var e=this.grid;return!e.activeEditor||e._edtHdl._fullEdit},t.prototype._setFullEdit=function(e){var t=this.grid;e.forceFullEdit&&t.activeEditor&&(t._edtHdl._fullEdit=!0)},t._cellStampProp="__wjCellStamp",t}(i.CellFactory),w=[g,m,C],y=function(){function e(){}return e.decorators=[{type:l.NgModule,args:[{imports:[p.WjDirectiveBaseModule,d.CommonModule],declarations:w.slice(),exports:w.slice()}]}],e.ctorParameters=function(){return[]},e}(),e("WjGridModule",y)}}});