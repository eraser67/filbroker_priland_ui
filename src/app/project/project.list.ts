// Angular
import { Component } from '@angular/core';

// Models
import { ModelProject } from '../model/model.project';

@Component({
    
  templateUrl: './project.list.html'
})

export class ProjectList {
    public title = 'Project List';
    public projects = new Array<ModelProject>();

    public ngOnInit() {
        let project: ModelProject = {
            id : 1,
            projectCode: "001",
            project: "Project1",
            address: "Cebu City",
            status: "OPEN",
            isLocked: true,
            createdBy: 1,
            createdDateTime: "12/18/2017",
            updatedBy: 1,
            updatedDateTime: "12/18/2017"
        };
        this.projects.push(project);
    }

}