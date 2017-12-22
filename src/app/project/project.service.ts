// Angular
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

// Message
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Wijmo
import { ObservableArray } from 'wijmo/wijmo';
import { Observable } from 'rxjs/Observable';

// Async
import { Subject } from 'rxjs/Subject';

// Model
import { MstProject } from '../model/model.mst.project';
import { SysDropDown } from '../model/model.sys.dropDown';


@Injectable()
export class ProjectService {

    public projectSource = new Subject<MstProject>();
    public projectObservable = this.projectSource.asObservable();

    public projectDeletedSource = new Subject<number>();
    public projectDeletedObservable = this.projectDeletedSource.asObservable();

    public projectSavedSource = new Subject<number>();
    public projectSavedObservable = this.projectSavedSource.asObservable();   

    public projectLockedSource = new Subject<number>();
    public projectLockedObservable = this.projectLockedSource.asObservable();  

    public projectUnlockedSource = new Subject<number>();
    public projectUnlockedObservable = this.projectUnlockedSource.asObservable();  

    public dropDownsSource = new Subject<ObservableArray>();
    public dropDownsObservable = this.dropDownsSource.asObservable();

    constructor(
        private router: Router,
        private http: Http,
        private toastr: ToastsManager
    ) { }

    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });

    private options = new RequestOptions({ headers: this.headers });

    public getProjects(): ObservableArray {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/List";
        let projectObservableArray = new ObservableArray();
        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        projectObservableArray.push({
                            id: results[i].Id,
                            projectCode: results[i].ProjectCode,
                            project: results[i].Project,
                            address: results[i].Address,
                            status: results[i].Status,
                            isLocked: results[i].IsLocked,
                            createdBy: results[i].CreatedBy,
                            createdDateTime: results[i].CreatedDateTime,
                            updatedBy: results[i].UpdatedBy,
                            updatedDateTime: results[i].UpdatedDateTime
                        });
                    }
                }
            }
        );
        return projectObservableArray;
    }

    public addProject(project: MstProject, toastr: ToastsManager): void {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Add";
        this.http.post(url, JSON.stringify(project), this.options).subscribe(
            response => {
                var id = response.json();
                if (id > 0) {
                    this.toastr.success("Add successful.");
                    setTimeout(() => {
                        this.router.navigate(['/project', id]);
                    }, 1000);
                } else {
                    this.toastr.error("Add failed.");
                    (<HTMLButtonElement>document.getElementById("btnAddProject")).disabled = false;
                    (<HTMLButtonElement>document.getElementById("btnAddProject")).innerHTML = "<i class='fa fa-plus fa-fw'></i> Add";
                }
            },
            error => {
                this.toastr.error("Server error.");
            }
        )
    }

    public saveProject(project: MstProject): void {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Save";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.projectSavedSource.next(1);
            },
            error => {
                this.projectSavedSource.next(0);
            }
        )
    }

    public lockProject(project: MstProject): void {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Lock";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.projectLockedSource.next(1);
            },
            error => {
                this.projectLockedSource.next(0);
            }
        )
    }

    public unlockProject(project: MstProject): void {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Unlock";
        this.http.put(url, JSON.stringify(project), this.options).subscribe(
            response => {
                this.projectUnlockedSource.next(1);
            },
            error => {
                this.projectUnlockedSource.next(0);
            }
        )
    }

    public getProject(id : number, toastr: ToastsManager) {
        let project: MstProject;
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Detail/" + id;

        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results != null) {
                    project = {
                        id: results.Id,
                        projectCode: results.ProjectCode,
                        project: results.Project,
                        address: results.Address,
                        status: results.Status,
                        isLocked: results.IsLocked,
                        createdBy: results.CreatedBy,
                        createdDateTime: results.CreatedDateTime,
                        updatedBy: results.UpdatedBy,
                        updatedDateTime: results.UpdatedDateTime
                    };
                    this.projectSource.next(project);
                } else {
                    this.toastr.error("No data.");
                    setTimeout(() => {
                        this.router.navigate(["/project"]);
                    }, 1000);
                }
            }
        );
    }

    public getDropDowns(toastr: ToastsManager)  {
        let dropDowns  = new ObservableArray();
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/SysDropDown/List";

        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        dropDowns.push({
                            id: results[i].Id,
                            category: results[i].Category,
                            description: results[i].Description,
                            value: results[i].Value
                        });
                    }
                    this.dropDownsSource.next(dropDowns);
                } else {
                    this.toastr.error("No data.");   
                }
            }
        );

    }

    public deleteProject(id : number) {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstProject/Delete/" + id;
        this.http.delete(url, this.options).subscribe(
            response => {
                this.projectDeletedSource.next(1);
            },
            error => {
                this.projectDeletedSource.next(0);
            }
        )
    }
    
    public getUnits(): ObservableArray {
        let unitObservableArray = new ObservableArray();
        return unitObservableArray;
    }

    public getHouseModels(): ObservableArray {
        let houseModelObservableArray = new ObservableArray();
        return houseModelObservableArray;
    }

}