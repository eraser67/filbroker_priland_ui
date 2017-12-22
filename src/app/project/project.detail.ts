// Angular
import { Component,ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { ProjectService } from './project.service';

// WijMo
import {ObservableArray, CollectionView} from 'wijmo/wijmo';

// Beautification
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Model
import { MstProject } from '../model/model.mst.project';

@Component({
  templateUrl: './project.detail.html'
})

export class ProjectDetail {
  public title = 'Project Detail';

  public projectStatusData : ObservableArray;

  private projectSub : any;
  private projectSavedSub : any;
  private projectLockedSub : any;
  private projectUnlockedSub : any;
  private projectStatusSub : any;

  public project : MstProject = {
    id: 0,
    projectCode: "",
    project: "",
    address: "",
    status: "",
    isLocked: false,
    createdBy: 1,
    createdDateTime: "",
    updatedBy: 1,
    updatedDateTime: ""
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private toastr: ToastsManager,
    private viewContainer: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
  ) {
    this.toastr.setRootViewContainerRef(viewContainer);
  }

  public ngOnInit() {
    this.getDropDowns();
    this.getProject();
  }
  
  public ngOnDestroy() {
    if( this.projectSub != null) this.projectSub.unsubscribe();
    if( this.projectSavedSub != null) this.projectSavedSub.unsubscribe();
    if( this.projectStatusSub != null) this.projectStatusSub.unsubscribe();
    if( this.projectLockedSub != null) this.projectLockedSub.unsubscribe();
    if( this.projectUnlockedSub != null) this.projectUnlockedSub.unsubscribe();
  }

  public getIdParameter() {
    let id = 0;
    this.activatedRoute.params.subscribe(params => {
      id = params['id'];
    });
    return id;
  }

  public getProject() {
    this.projectService.getProject(this.getIdParameter(), this.toastr);

    this.projectSub = this.projectService.projectObservable
      .subscribe(
        data => {
          this.project.id = data.id;
          this.project.projectCode = data.projectCode;
          this.project.project = data.project;
          this.project.address = data.address;
          this.project.status = data.status;
          this.project.isLocked = data.isLocked;
          this.project.createdBy = data.createdBy;
          this.project.createdDateTime = data.createdDateTime;
          this.project.updatedBy = data.updatedBy;
          this.project.updatedDateTime= data.updatedDateTime;
        }
      );
  }

  public getDropDowns() : void {
    this.projectService.getDropDowns(this.toastr);

    this.projectStatusSub = this.projectService.dropDownsObservable.subscribe(
      data => {
        let projectStatuses = new ObservableArray();

        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            if (data[i].category == "PROJECT STATUS") {
              projectStatuses.push({
                id: data[i].id,
                category: data[i].category,
                description: data[i].description,
                value: data[i].value
              });
            }
          }
        }

        this.projectStatusData = projectStatuses;
      }
    );
  }

  public btnSaveProjectClick() : void {
    (<HTMLButtonElement>document.getElementById("btnSaveProject")).disabled = true;
    (<HTMLButtonElement>document.getElementById("btnSaveProject")).innerHTML = "<i class='fa fa-plus fa-fw'></i> Saving...";
    
    this.projectService.saveProject(this.project);

    this.projectSavedSub =  this.projectService.projectSavedObservable.subscribe(
      data => {
          if(data == 1) {
              this.toastr.success("Saving successful.");
              (<HTMLButtonElement>document.getElementById("btnSaveProject")).disabled = false;
              (<HTMLButtonElement>document.getElementById("btnSaveProject")).innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
          } else if(data == 0) {
              this.toastr.error("Saving failed.");   
              (<HTMLButtonElement>document.getElementById("btnSaveProject")).disabled = true;
              (<HTMLButtonElement>document.getElementById("btnSaveProject")).innerHTML = "<i class='fa fa-plus fa-fw'></i> Save";
          }
      }
    );
  }

  public btnLockProjectClick() : void {
    (<HTMLButtonElement>document.getElementById("btnLockProject")).disabled = true;
    (<HTMLButtonElement>document.getElementById("btnLockProject")).innerHTML = "<i class='fa fa-lock fa-fw'></i> Locking...";
    
    this.projectService.lockProject(this.project);

    this.projectLockedSub =  this.projectService.projectLockedObservable.subscribe(
      data => {
          if(data == 1) {
              this.toastr.success("Locking successful.");
              this.project.isLocked = true;
              (<HTMLButtonElement>document.getElementById("btnLockProject")).disabled = false;
              (<HTMLButtonElement>document.getElementById("btnLockProject")).innerHTML = "<i class='fa fa-lock fa-fw'></i> Lock";
          } else if(data == 0) {
              this.toastr.error("Locking failed.");   
              (<HTMLButtonElement>document.getElementById("btnLockProject")).disabled = false;
              (<HTMLButtonElement>document.getElementById("btnLockProject")).innerHTML = "<i class='fa fa-lock fa-fw'></i> Lock";
          }
      }
    );
  }

  public btnUnlockProjectClick() : void {
    (<HTMLButtonElement>document.getElementById("btnUnlockProject")).disabled = true;
    (<HTMLButtonElement>document.getElementById("btnUnlockProject")).innerHTML = "<i class='fa fa-unlock fa-fw'></i> Unlocking...";
    
    this.projectService.unlockProject(this.project);

    this.projectUnlockedSub = this.projectService.projectUnlockedObservable.subscribe(
      data => {
          if(data == 1) {
              this.toastr.success("Unlocking successful.");
              this.project.isLocked = false;
              (<HTMLButtonElement>document.getElementById("btnUnlockProject")).disabled = false;
              (<HTMLButtonElement>document.getElementById("btnUnlockProject")).innerHTML = "<i class='fa fa-unlock fa-fw'></i> Unlock";
          } else if(data == 0) {
              this.toastr.error("Unlocking failed.");   
              (<HTMLButtonElement>document.getElementById("btnUnlockProject")).disabled = false;
              (<HTMLButtonElement>document.getElementById("btnUnlockProject")).innerHTML = "<i class='fa fa-unlock fa-fw'></i> Unlock";
          }
      }
    );
  }




}