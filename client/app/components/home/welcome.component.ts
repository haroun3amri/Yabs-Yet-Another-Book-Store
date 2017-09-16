import { Component ,OnInit } from '@angular/core';
import { BookService } from '../../BLL/book.service';
import { CartService } from  '../../BLL/cart.service';
import {IHistory} from '../History/History';
import { HistoryService } from '../../BLL/History.Service'
import {IBook} from '../Books/book';
import { ICart } from '../Cart/Cart';
@Component({
    moduleId: module.id,
    templateUrl: './welcome.component.html'

})
export class WelcomeComponent implements OnInit{
    public pageTitle: string = 'Welcome';
    books: IBook[] = [];
    carts: ICart[] = [];
    histories: IHistory[] = [];
    errorMessage: string ;
    constructor (private  _bookService : BookService, private cartService: CartService ,  private historyService: HistoryService){

    }

    ngOnInit():void{
        // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(books => this.books = books,
                error => this.errorMessage = <any>error);

        this.cartService.getCarts()
            .subscribe(carts => this.carts = carts,
                error => this.errorMessage = <any>error);

        this.historyService.getHistory()
            .subscribe(histories => this.histories = histories,
                error => this.errorMessage = <any>error);
    }


}


