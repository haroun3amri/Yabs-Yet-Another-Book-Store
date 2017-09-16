/**
 * Created by Haroun3amri on 03/05/2017.
 */
import { PipeTransform, Pipe} from '@angular/core';
import { IBook } from './book';

@Pipe({
    name:'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
    transform(value: IBook[], filterBy: string): IBook[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((book:IBook)=>
        book.Genre.toLocaleLowerCase().indexOf(filterBy) !== -1) : value ;
    }
}