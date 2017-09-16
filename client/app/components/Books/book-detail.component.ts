/**
 * Created by Haroun3amri on 27/03/2017.
 */
import { Component  , OnInit} from '@angular/core';
import {IBook} from './book';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { BookService } from '../../BLL/book.service';


@Component({
    moduleId: module.id,
    templateUrl: './book-detail.component.html'
})

export class BookDetailComponent implements OnInit{
    pageTitle:string = 'Book Detail';
    errorMessage: string;
    book:IBook;
    private sub: Subscription;


    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _bookService: BookService)
    {}

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getBook(id);

            });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getBook(id: number) {
        this._bookService.getBook(id).subscribe(
            product => this.book = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/books']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Book Detail: ' + message;
    }

}
