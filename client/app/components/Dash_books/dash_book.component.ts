/**
 * Created by Haroun3amri on 27/04/2017.
 */
/**
 * Created by Haroun3amri on 23/03/2017.
 */
import {Component,OnInit} from '@angular/core';
import {IBook} from '../Books/book';
import { BookService } from '../../BLL/book.service'
import { ICart } from '../Cart/Cart'
@Component
({
    //selector: 'pm-books',
    moduleId: module.id,
    templateUrl: 'dash_book.component.html',
    styleUrls: ['dash_book.component.css'],
    providers: [BookService]

})
export class DashBookComponent implements OnInit {
    pageTitle: string = 'Book List';
    showImage: boolean = false;
    listFilter: string ;
    imageWidth: number = 50;
    imageMargin: number = 2;
    books: IBook[] = [];
    carts: ICart[] = [];
    errorMessage: string ;
    title: string;
    Author: string;
    Genre:string;
    price: string;
    Rating: string;
    imageUrl:string;
    test:any[];
    constructor (private  _bookService : BookService){
        this._bookService.getBooks()
            .subscribe(books => {
                console.log(books);
            });

    }
    ngOnInit():void{
        // console.log('In OnInit');
        this._bookService.getBooks()
            .subscribe(books => this.books = books,
                error => this.errorMessage = <any>error);

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
  /*  ngAfterViewInit() {
        $(document).ready(function() {
            $('#example').dataTable({
                data:this.test;
            });
        } );
    }*/
    onRatingClicked(message: string): void {
        this.pageTitle = 'Book List: ' + message;
    }
    addBook(_event){
        event.preventDefault();
        //console.log(this.title);
        var newBook = {
            title: this.title,
            Author: this.Author,
            Genre: this.Genre,
            price :this.price,
            Rating :this.Rating,
            imageUrl : this.imageUrl


        }
        this._bookService.addBook(newBook)
            .subscribe(books => {
                this.books.push(books);
                this.title='';
                this.Author='';
                this.Genre='';
                this.price='';
                this.Rating='';
                this.imageUrl='';

            });

    }



    deleteBook(id){
        var books=this.books;
        this._bookService.deleteBook(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].bookId == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
    }


    addBookToCart(_event){
        event.preventDefault();
        //console.log(this.title);
        var newCart = {
            title: this.title,
            Author: this.Author,
            Genre: this.Genre,
            price :this.price,
            Rating :this.Rating,
            imageUrl : this.imageUrl



        }
        this._bookService.addBookToCart(newCart)
            .subscribe(carts => {
                this.carts.push(carts);
                this.title='';
                this.Author='';
                this.Genre='';
                this.price='';
                this.Rating='';
                this.imageUrl='';

            });

    }



}
