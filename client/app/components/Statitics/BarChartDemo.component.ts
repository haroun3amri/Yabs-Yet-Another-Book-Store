import { Component , OnInit} from '@angular/core';
import { CartService } from  '../../BLL/cart.service';
import { BookService } from '../../BLL/book.service';
import {IBook} from '../../components/Books/book';
import { ICart } from '../Cart/Cart'
import {IHistory} from '../../components/History/History';
import{ HistoryService } from '../../BLL/History.Service';
import {Observable} from "rxjs";

@Component({
    selector: 'bar-chart-demo',
    moduleId: module.id,
    templateUrl: 'BarChartDemo.component.html'
})
export class BarChartDemoComponent implements OnInit {
    books: IBook[] = [];
    carts: ICart[] = [];
    history: IHistory;
    Titles : string[] = [];
    Prices : number [] = [];
    histories: IHistory[] = [];
    errorMessage: string ;

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    constructor (private  _bookService : BookService,
                 private cartService: CartService ,
                 private historyService:HistoryService
    ){

    }public barChartLabels:string[] = ['2010', '2011', '2012', '2013', '2014', '2015', '2016'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;



    public barChartData:any[] = [
        {data: [650, 590, 800, 811, 560, 550, 400], label: 'Sales Per Year '},
        {data: [420,300, 340, 352,291 , 412, 450], label: 'Number Of Visitors '}
    ];
// a completer par binding avec la base de donnée
    public lineChartData:Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType:string = 'line';
    public pieChartType:string = 'pie';

    // Pie

    public pieChartLabels:string[] = ['Drama', 'bibliography', 'Action' , 'Comedy' ,'Romance', 'Science'];
    public pieChartData:number[] = [300, 200, 100, 50 , 100,150];

    ngOnInit():void{



        this._bookService.getBooks()
            .subscribe(books => this.books = books,
                error => this.errorMessage = <any>error);

        this.cartService.getCarts()
            .subscribe(carts => this.carts = carts,
                error => this.errorMessage = <any>error);

        this.historyService.addHistory(this.history )
            .subscribe(histories => {
                this.histories.push(histories);

            })
    }

// events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }


}