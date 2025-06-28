import { Component, inject, signal, Signal } from '@angular/core';
import { CartService } from '../../services/cartService';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  //constructor(private cartService: CartService){};
  //cartProducts!: Signal<any[]>;
  faPlus = faPlus;
  faMinus = faMinus;
  faTrash = faTrash;

  private cartService = inject(CartService);

  cartProducts = this.cartService.getCartItems();

  remove(id: number){
    this.cartService.removeFromCart(id)
  }

  increase(id:number){
    this.cartService.increaseQuantity(id);
  }
  decrease(id:number){
    this.cartService.decreaseQuantity(id);
  }

  getCartTotal(): number {
  let total = 0;
  for (let item of this.cartProducts()) {
    total += item.price * item.quantity;
  }
  return total;
}
}
