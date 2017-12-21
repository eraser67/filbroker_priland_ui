// Angular
import { Component,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { ProjectService } from './project.service';

// WijMo
import {ObservableArray, CollectionView} from 'wijmo/wijmo';

// Beautification
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Model
import { ModelProject } from '../model/model.project';

@Component({
  templateUrl: './project.list.html'
})

export class ProjectList {
    public title = 'Project List';
    public filterProject : string;

    private currentDate = new Date();
    private currentDateString = [this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate()].join('-');

    private projectDeletedSub : any;

    public project : ModelProject = {
        id: 0,
        projectCode: "NA",
        project: "NA",
        address: "NA",
        status: "OPEN",
        isLocked: false,
        createdBy: 1,
        createdDateTime: this.currentDateString,
        updatedBy: 1,
        updatedDateTime: this.currentDateString
    };

    public projectData : ObservableArray;
    public projectCollection : CollectionView;

    constructor(
        private projectService : ProjectService,
        private toastr : ToastsManager,
        private viewContainer : ViewContainerRef,
        private router : Router
    ) {
        this.toastr.setRootViewContainerRef(viewContainer);
    }

    public ngOnInit() {
        this.getProjects();
    }

    public getProjects() : void {
        this.projectData = this.projectService.getProjects();
        this.projectCollection = new CollectionView(this.projectData);
        this.projectCollection.pageSize = 15;
        this.projectCollection.trackChanges = true;
    }

    public btnAddProjectClick() : void {
        (<HTMLButtonElement>document.getElementById("btnAddProject")).disabled = true;
        (<HTMLButtonElement>document.getElementById("btnAddProject")).innerHTML = "<i class='fa fa-plus fa-fw'></i> Adding...";
        
        this.projectService.addProject(this.project, this.toastr);
    }

    public btnEditProjectClick() : void {
        let selectedProject = this.projectCollection.currentItem;
        this.router.navigate(['/project', selectedProject.id]);
    }
    
    public btnDeleteProjectClick() : void {
        (<HTMLButtonElement>document.getElementById("btnDeleteProject")).disabled = true;
        (<HTMLButtonElement>document.getElementById("btnDeleteCloseProject")).disabled = true;

        let selectedProject = this.projectCollection.currentItem;
        this.projectService.deleteProject(selectedProject.id);

        this.projectDeletedSub = this.projectService.projectDeletedObservable.subscribe(
            data => {
                if(data == 1) {
                    this.toastr.success("Delete successful.");
                    this.projectCollection.remove​(selectedProject);
                    (<HTMLButtonElement>document.getElementById("btnDeleteProject")).disabled = false;
                    (<HTMLButtonElement>document.getElementById("btnDeleteCloseProject")).disabled = false;
                    document.getElementById("btnDeleteCloseProject").click();
                } else if(data == 0) {
                    this.toastr.error("Delete failed.");   
                    (<HTMLButtonElement>document.getElementById("btnDeleteProject")).disabled = false;
                    (<HTMLButtonElement>document.getElementById("btnDeleteCloseProject")).disabled = false;
                }
            }
        );
    }

    ngOnDestroy() {
        if( this.projectDeletedSub != null) this.projectDeletedSub.unsubscribe();
    }
}