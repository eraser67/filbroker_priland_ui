// Angular
import { Component,ViewContainerRef } from '@angular/core';

// Services
import { ProjectService } from './project.service';

// WijMo
import {ObservableArray, CollectionView} from 'wijmo/wijmo';

// Beautification
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  templateUrl: './project.list.html'
})

export class ProjectList {
    public title = 'Project List';
    public filterProject : string;

    public projectData : ObservableArray;
    public projectCollection : CollectionView;

    constructor(
        private projectService : ProjectService,
        private toastr : ToastsManager,
        private viewContainer : ViewContainerRef
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

    }
    public btnEditProjectClick() : void {

    }
    public btnDeleteProjectClick() : void {

    }
}