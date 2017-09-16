/**
 * Created by Haroun3amri on 27/04/2017.
 */
/**
 * Created by Haroun3amri on 23/03/2017.
 */
import { Component , OnChanges , Input , Output , EventEmitter} from '@angular/core';
@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent  implements  OnChanges{
    @Input() Rating : number;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.Rating * 86/5;
    }
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.Rating} was clicked!`);
    }
}