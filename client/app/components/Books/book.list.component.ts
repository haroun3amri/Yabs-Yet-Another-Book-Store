/**
 * Created by Haroun3amri on 23/03/2017.
 */
import {Component,OnInit} from '@angular/core';
import {IBook} from './book';
import { BookService } from '../../BLL/book.service';
import { ICart } from '../Cart/Cart'
import { CartService } from  '../../BLL/cart.service';
import {IHistory} from '../History/History';
import{ HistoryService } from '../../BLL/History.Service';
import {AuthService} from '../../BLL/auth.service';
@Component
({
    //selector: 'pm-books',
    moduleId: module.id,
    templateUrl: 'book.list.component.html',
    styleUrls: ['book.list.component.css']

})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    history: IHistory;
    histories: IHistory[] = [];
    showImage: boolean = false;
    listFilter: string ;
    listCategorie: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    ElementNumber:number=6;
    PageNumber:number=1;
    tmp :number=0;
    books: IBook[] = [];
    carts: ICart[] = [];
    errorMessage: string ;
    title: string;
    UserLogin:string;
    ListMode:boolean=true;
    NumberMarge:number=1;
    name:string;
    Author: string;
    Genre:string;
    price: string;
    Rating: string;
    imageUrl:string;
    sortRarings:boolean = false;
    sortTitle:boolean = false;
    sortAuthor:boolean = false;
    sortGenre:boolean = false;
    sortPrice:boolean = false;
    boolPrev:boolean=false;
    boolNext:boolean=true;
    constructor (private  _bookService : BookService,
                 private cartService: CartService ,
                 private historyService:HistoryService,
                 private authService:AuthService
    ){

}
    ngOnInit():void{
       // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(books => this.books = books.slice(0,this.ElementNumber),
                      error => this.errorMessage = <any>error);

        this.cartService.getCarts()
            .subscribe(carts => this.carts = carts,
                error => this.errorMessage = <any>error);

        this.historyService.addHistory(this.history )
            .subscribe(histories => {
                this.histories.push(histories);

            })
    }


    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    toggleView(): void {
        this.ListMode = !this.ListMode;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Book List: ' + message;
    }

    ShowNext():void{

          this.PageNumber=this.PageNumber + 1;
        this.tmp++;
     // alert('from : ' +this.ElementNumber*this.tmp +' to :'+this.PageNumber*5 );
        this._bookService.getBooks()
            .subscribe(books => this.books = books.slice(this.ElementNumber*this.tmp,this.PageNumber*this.ElementNumber),
                error => this.errorMessage = <any>error);
        this.NumberMarge = this.NumberMarge + 1;


    }

    ShowPrev():void{

        this.PageNumber=this.PageNumber + 1;
        this.tmp++;
       alert('from : ' +( (this.ElementNumber * this.tmp) - this.ElementNumber) +' to :'+ ( (this.PageNumber*5)-this.ElementNumber ) );
        this._bookService.getBooks()
            .subscribe(books => this.books = books.slice(this.ElementNumber*this.tmp-this.ElementNumber,this.PageNumber*this.ElementNumber-this.ElementNumber),
                error => this.errorMessage = <any>error);
        this.NumberMarge = this.NumberMarge + 1;


    }

    ElementNumberLoader():void{
        this._bookService.getBooks()
            .subscribe(books => this.books = books.slice(0,this.ElementNumber),
                error => this.errorMessage = <any>error);
    }

    SortRating():void{
        if(!this.sortRarings) {
            this.books.sort(function (a, b) {
                return (a.Rating) - (b.Rating);
            });
            this.sortRarings=true;
        }
        else
        {
            this.books.sort(function (a, b) {
                return (b.Rating) - (a.Rating);
            });
            this.sortRarings=false;
        }

    }



    SortPrice():void{
        if(!this.sortPrice) {
            this.books.sort(function (a, b) {
                return (a.price) - (b.price);
            });
            this.sortPrice=true;
        }
        else
        {
            this.books.sort(function (a, b) {
                return (b.price) - (a.price);
            });
            this.sortPrice=false;
        }
    }


    SortCategory():void {
        if(!this.sortGenre) {
            this.books.sort(function (a, b) {
                if (a.Genre < b.Genre) return -1;
                if (a.Genre > b.Genre) return 1;
                return 0;
            })
            this.sortGenre=true;
        }
        else
        {
            this.books.sort(function (a, b) {
                if (a.Genre > b.Genre) return -1;
                if (a.Genre < b.Genre) return 1;
                return 0;
            })
            this.sortGenre=false;

        }
    }

    SortTitle():void {
        if(!this.sortTitle) {
            this.books.sort(function (a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            })
            this.sortTitle=true;
        }
        else
        {
            this.books.sort(function (a, b) {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;
                return 0;
            })
            this.sortTitle=false;

        }
    }

    SortAuthor():void{
        if(!this.sortAuthor) {
            this.books.sort(function (a, b) {
                if (a.Author < b.Author) return -1;
                if (a.Author > b.Author) return 1;
                return 0;
            })
            this.sortAuthor=true;
        }
        else {
            this.books.sort(function (a, b) {
                if (a.Author > b.Author) return -1;
                if (a.Author < b.Author) return 1;
                return 0;
            })
            this.sortAuthor=false;
        }
    }






    addBookToCart(book){

        event.preventDefault();
        //console.log(this.title);
        for (let Onecart of this.carts) {
            if(Onecart.title == book.title)
            {
                alert('You already have that book in your cart');
                return null;
            }
        }

        this._bookService.addBookToCart(book)
            .subscribe(books => {
                this.books.push(books);
                this.title='';
                this.Author='';
                this.Genre='';
                this.price='';
                this.Rating='';
                this.imageUrl='';

            });

        this.history = {
            HistId:null,
            booktitle: book.title,
            bookAuthor: book.Author,
            bookPrice: book.price,
            Operation :'Add to Cart',
            Date :new Date(),
            State : 'Added',
            UserLogin:this.authService.getuser()
        }
        this.historyService.addHistory(this.history )
            .subscribe(histories => {
                this.histories.push(histories);

            });
    }
//**************

    //*************************************



}
