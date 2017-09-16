/**
 * Created by Haroun3amri on 16/04/2017.
 */
export interface ICart{
    cartId:number;
    bookId: number;
    userId :number;
    UserLogin:string;
    title:string;
    Author:string;
    Genre:string;
    price:number;
    Rating:number;
    imageUrl:string;
}
export class Cart implements ICart{

    constructor(
        public cartId:number,
        public bookId:number,
        public userId:number,
        public UserLogin:string,
        public title:string,
        public Author:string,
        public Genre:string,
        public price:number,
        public Rating:number,
        public imageUrl:string){}

}