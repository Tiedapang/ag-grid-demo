import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridDataServiceService {

  constructor(public http: HttpClient) { }

  getSmallRowDatas(): Observable<any>{
    return this.http.get(
      '../../../assets/smallRowData.json'
    );
  }
  getRowDatas(): Observable<any>{
    return this.http.get(
      '../../../assets/rowData.json'
    );
  }
}
