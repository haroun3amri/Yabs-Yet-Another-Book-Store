/**
 * Created by Haroun3amri on 16/04/2017.
 */
import { Injectable } from '@angular/core';
import { ICart } from '../components/Cart/Cart'
import{ Http , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class  CartService {
    private _cartUrl= '/carts';
    constructor(private _http: Http){}
    //*******************************************************************
    getCarts(): Observable<ICart[]> {
        return this._http.get(this._cartUrl)
            .map((response : Response) => <ICart[]> response.json())
            //.do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);
    }
//***********************************************************************
    addCart(newCart){
        var headers = new Headers();
        headers.append('Content-Type' ,'application/json');
        return this._http.post('http://localhost:3000/cart',JSON.stringify(newCart),{headers: headers})
            .map(res => res.json());
    }
    //*******************************************************************
    deleteCart(id){
        //alert('http://localhost:3000/cart/'+id));
        return this._http.delete('/cart/'+id)
            .map(res=>res.json());
    }

    //********************************************************************
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
