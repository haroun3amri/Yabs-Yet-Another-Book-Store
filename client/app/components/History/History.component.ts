/**
 * Created by Haroun3amri on 16/04/2017.
 */
import { Component ,OnInit } from '@angular/core';
import {IHistory} from '../History/History';
import { HistoryService } from '../../BLL/History.Service'
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'History.component.html',
    providers: [HistoryService]

})
export class HistoryComponent implements OnInit {
    pageTitle: string = 'My History';
    showImage: boolean = false;
    listFilter: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    histories: IHistory[] = [];
    errorMessage: string;

    constructor(private  historyService: HistoryService) {
        this.historyService.getHistory()
            .subscribe(histories => {
                console.log(histories);
            });
    }

    ngOnInit(): void {
        this.historyService.getHistory()
            .subscribe(histories => this.histories = histories,
                error => this.errorMessage = <any>error);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Book List: ' + message;
    }

    deleteHist(id){
        var histories=this.histories;
        this.historyService.deleteHist(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < histories.length; i++) {
                    if (histories[i].HistId == id) {
                        histories.splice(i, 1);
                    }
                }
            }
        });
    }
}