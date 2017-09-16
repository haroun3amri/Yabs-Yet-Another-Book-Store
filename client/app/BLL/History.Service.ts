/**
 * Created by Haroun3amri on 22/04/2017.
 */
import { Injectable } from '@angular/core';
import { IHistory } from '../components/History/History'
import{ Http , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class  HistoryService {
    private _historyUrl= '/Histories';
    constructor(private _http: Http){}
    //*******************************************************************
    getHistory(): Observable<IHistory[]> {
        return this._http.get(this._historyUrl)
            .map((response : Response) => <IHistory[]> response.json())
            .do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);

    }

//*********************************************
    addHistory(newhistory){
        var headers = new Headers();
        headers.append('Content-Type' ,'application/json');
        return this._http.post('/history',JSON.stringify(newhistory),{headers: headers})
            .map(res => res.json());
    }
    //**********************************
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    //**********************************
    deleteHist(id){
        return this._http.delete('/history/'+id)
            .map(res=>res.json());
    }
    //**********************************
}

