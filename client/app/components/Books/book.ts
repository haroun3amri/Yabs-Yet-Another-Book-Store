/**
 * Created by Haroun3amri on 23/03/2017.
 */
export interface IBook{
    bookId: number;
    title:string;
    Author:string;
    Genre:string;
    price:number;
    Rating:number;
    imageUrl:string;
}
export class Book implements IBook{

    constructor(
        public bookId:number,
        public title:string,
        public Author:string,
        public Genre:string,
        public price:number,
        public Rating:number,
        public imageUrl:string){}

    }
