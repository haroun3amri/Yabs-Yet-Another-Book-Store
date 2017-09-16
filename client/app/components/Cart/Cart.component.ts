/**
 * Created by Haroun3amri on 16/04/2017.
 */
import { Component ,OnInit } from '@angular/core';
import {ICart} from '../Cart/Cart';
import { CartService } from '../../BLL/cart.service'
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'Cart.component.html',
    providers: [CartService]

})
export class CartComponent implements OnInit {
    pageTitle: string = 'My Cart';
    showImage: boolean = false;
    listFilter: string;
    imageWidth: number = 50;
    imageMargin: number = 2;
    carts: ICart[] = []
    errorMessage: string;

    constructor(private  cartService: CartService) {
        this.cartService.getCarts()
            .subscribe(carts => {console.log(carts);
            });
    }
    //**************************************
    ngOnInit(): void {
        // console.log('In OnInit');
        this.cartService.getCarts()
            .subscribe(carts => this.carts = carts,
                error => this.errorMessage = <any>error);
    }
    //***************************************
    deleteCart(id){
        var carts=this.carts;
        this.cartService.deleteCart(id).subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].cartId == id) {
                        carts.splice(i, 1);
                    }
                }
            }
        });
    }
    //**************************************
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
//************************************
    onRatingClicked(message: string): void {
        this.pageTitle = 'Book List: ' + message;
    }
}