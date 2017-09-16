/**
 * Created by Haroun3amri on 22/04/2017.
 */
export interface IHistory{
    HistId:number;
    booktitle:string;
    bookAuthor:string;
    bookPrice:number;
    Operation:string;
    Date:Date;
    State:string;
    UserLogin:string;


}
export class History implements IHistory{

    constructor(
        public HistId:number,
        public booktitle:string,
        public bookAuthor:string,
        public bookPrice:number,
        public Operation:string,
        public Date:Date,
        public State:string,
        public UserLogin:string){}


}
