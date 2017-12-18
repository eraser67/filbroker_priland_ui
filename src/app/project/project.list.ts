import { Component } from '@angular/core';


@Component({
  templateUrl: './project.list.html'
})

export class ProjectList {
    title = 'Project List';

    projectData = [
        { code: "1", project: "Project1"},
        { code: "2", project: "Project2"}
    ];

    public ngOnInit() {
        
    }

}