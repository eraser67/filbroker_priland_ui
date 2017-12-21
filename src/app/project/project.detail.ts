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
import { ModelProject } from '../model/model.project';

@Component({
  templateUrl: './project.detail.html'
})

export class ProjectDetail {
  public title = 'Project Detail';

  public projectStatusData : ObservableArray;
  public projectStatusSelected : string;

  public project : ModelProject = {
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
    this.getProjectStatus();
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

    let sub = this.projectService.projectObservable
      .subscribe(
        data => {
          if(data == null) {
            sub.unsubscribe();    
          } else {
            this.project.projectCode = data.projectCode;
            this.project.project = data.project;
            this.project.address = data.address;
            this.project.status = data.status;
          }
        }
      );
  }

  public getProjectStatus() {
    this.projectService.getProjectStatus(this.toastr);

    this.projectService.projectStatusObservable.subscribe(
      data => {
        this.projectStatusData = data;
        this.getProject();
      }
    );
  }

}