/**
 * Created by Haroun3amri on 27/04/2017.
 */
/**
 * Created by Haroun3amri on 08/04/2017.
 */
import { Component ,OnInit } from '@angular/core';
import {IBook} from '../books/book';
import { BookService } from '../../BLL/book.service'
import {Router} from "@angular/router";
import {ICart} from '../Cart/Cart';
import { CartService } from '../../BLL/cart.service';
@Component({
    moduleId: module.id,
    templateUrl: 'dash_cart.component.html',
    styleUrls: ['dash_cart.component.css'],
    providers: [BookService,
        CartService]

})
export class DashCartComponent implements OnInit {

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
    cartId:number;
    UserLogin:string;
    userId:number;
    bookId:number;
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
            cartId:this.cartId,
            bookId:this.bookId,
            UserLogin:this.UserLogin,
            userId:this.userId,
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
                this.cartId=null;
                this.bookId=null;
                this.userId=null;
                this.UserLogin=''
                this.title='';
                this.Author='';
                this.Genre='';
                this.price='';
                this.Rating='';
                this.imageUrl='';

            });

    }
}
