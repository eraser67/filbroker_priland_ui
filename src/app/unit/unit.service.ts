// Angular
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// Message
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Wijmo
import { ObservableArray } from 'wijmo/wijmo';

// Async
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// Model
import { MstProject } from '../model/model.mst.project';
import { MstUnit } from '../model/model.mst.unit';
import { MstHouseModel } from '../model/model.mst.houseModel';
import { SysDropDown } from '../model/model.sys.dropDown';

@Injectable()
export class UnitService {

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

    public getUnits(project: string): ObservableArray {
        let url = "http://filbrokerwebsite-priland.azurewebsites.net/api/MstUnit/ListPerProject/" + project;
        let unitObservableArray = new ObservableArray();
        this.http.get(url, this.options).subscribe(
            response => {
                var results = new ObservableArray(response.json());
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        unitObservableArray.push({
                            id: results[i].Id,
                            unitCode: results[i].UnitCode,
                            block: results[i].Block,
                            lot: results[i].Lot,
                            projectId: results[i].ProjectId,
                            project: results[i].Project,
                            houseModelId: results[i].HouseModelId,
                            houseModel: results[i].HouseModel,
                            tla: results[i].TLA,
                            tfa: results[i].TFA,
                            price: results[i].Price,
                            status: results[i].Status,
                            isLocked: results[i].IsLocked,
                            createdBy: results[i].CreatedBy,
                            createdDateTime: results[i].CreatedDateTime,
                            updatedBy: results[i].UpdatedBy,
                            updatedDateTime: results[i].UpdatedDateTime,
                        });
                    }
                }
            }
        );
        return unitObservableArray;
    }
}
