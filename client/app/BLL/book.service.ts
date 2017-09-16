/**
 * Created by Haroun3amri on 24/03/2017.
 */
import { Injectable } from '@angular/core';
import { IBook } from '../components/Books/book'
import { ICart } from '../components/Cart/Cart'
import{ Http , Response , Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class  BookService {
    user: any;
    authToken: any;
    cart: ICart;
    private _bookUrl= 'http://localhost:3000/books';
    constructor(private _http: Http ){
    }
    //********************************************************************
    loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    //**********************************************************************
    storeUserData(token, user){
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
    //*******************************************************************
    getBooks(): Observable<IBook[]> {
        return this._http.get(this._bookUrl)
            .map((response : Response) => <IBook[]> response.json())
            .do(data => console.log('All: '+ JSON.stringify(data)))
            .catch(this.handleError);

    }
//**************************************************************
    addBook(newBook){
var headers = new Headers();
        headers.append('Content-Type' ,'application/json');
        return this._http.post('/book',JSON.stringify(newBook),{headers: headers})
            .map(res => res.json());
    }
    //***************************************************************
    addBookToCart(newBook){
if(this.user == null)
{
alert('You need to login first !!');
    return null;
}

else {
    var headers = new Headers();
     this.cart = {
         bookId:newBook.bookId,
         cartId: Math.random(),
         UserLogin: this.user.name,
         title: newBook.title ,
         Author: newBook.Author ,
         Genre: newBook.Genre ,
         price : newBook.price ,
         Rating : newBook.Rating ,
        imageUrl : newBook.imageUrl ,
        userId: this.user.authToken
    }
    headers.append('Content-Type', 'application/json');
    return this._http.post('/cart', JSON.stringify(this.cart), {headers: headers})
    .map(res => res.json());
}
    }
    //***************************************************************


    deleteBook(id){
        return this._http.delete('/book/'+id)
            .map(res=>res.json());
    }

//*********************************************
    getBook(id: number): Observable<IBook> {
        return this._http.get('/book/'+id)
            .map(res=>res.json());
    }


    //**********************************
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
