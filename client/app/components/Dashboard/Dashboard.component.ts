/**
 * Created by Haroun3amri on 08/04/2017.
 */
import { Component ,OnInit } from '@angular/core';
import {IBook} from '../books/book';
import { BookService } from '../../BLL/book.service'
import {Router} from "@angular/router";
import {ICart} from '../Cart/Cart';
import { CartService } from '../../BLL/cart.service';

import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';





@Component({
    moduleId: module.id,
    templateUrl: 'Dashboard.component.html',
    styleUrls: ['Dashboard.component.css'],
    providers: [BookService,
    CartService]

})
export class DashboardComponent implements OnInit {

    books: IBook[] = [];

    carts:ICart[]=[];
    imageWidth: number = 50;
    imageHeigh: number= 10;
    imageMargin: number = 2;
    title: string;
    Author: string;
    Genre:string;
    price: string;
    Rating: string;
    imageUrl:string;
    errorMessage: string ;
    constructor(private bookService: BookService, private cartService: CartService, private router : Router) {
        this.bookService.getBooks()
            .subscribe(books => {
                console.log(books);
            });

        this.cartService.getCarts()
            .subscribe(carts => {
                console.log(carts);
            });
    }
   /* ngAfterViewInit() {
        $(document).ready(function() {
            $('#example').dataTable();
        } );
    }*/

    ngOnInit(): void {
        // console.log('In OnInit');

        this.bookService.getBooks()
            .subscribe(books => this.books = books,
                error => this.errorMessage = <any>error);

        this.cartService.getCarts()
            .subscribe(carts => this.carts = carts,
                error => this.errorMessage = <any>error);
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
        this.bookService.addBook(newBook)
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
        this.bookService.deleteBook(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < books.length; i++) {
                    if (books[i].bookId == id) {
                        books.splice(i, 1);
                    }
                }
            }
        });
        this.router.navigate(["/Dashboard"]);

    }


    addCart(_event){
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
        this.cartService.addCart(newCart)
            .subscribe(carts => {
                this.books.push(carts);
                this.title='';
                this.Author='';
                this.Genre='';
                this.price='';
                this.Rating='';
                this.imageUrl='';

            });

    }
}