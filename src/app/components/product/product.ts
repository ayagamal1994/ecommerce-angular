import { Component, computed, inject, signal } from '@angular/core';
import { OneProduct } from '../../services/one-product';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartService';
import { PricediscountPipe } from '../../pipe/pricediscount-pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FontAwesomeModule, PricediscountPipe],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  faPlus = faPlus;
  faMinus = faMinus;

  productDetails = signal<any>(null);

  private oneProduct = inject(OneProduct);
  private cartService = inject(CartService);
  cartProducts = this.cartService.getCartItems();

   cartItemQuantity = computed(() => {
    const selected = this.productDetails();
    const items = this.cartService.getCartItems()();
    const match = items.find(i => i.id === selected?.id);
    return match ? match.quantity : 0;
  });

  ngOnInit() {
    this.oneProduct.getProductFromLocalstorage();
    this.productDetails.set(this.oneProduct.getSelectedProduct()());
    
  }


  increase(id: number) {
    if (!this.cartService.isInCart(id)) {
    const product = this.productDetails();
    this.cartService.addToCart(product);
  } else {
    this.cartService.increaseQuantity(id);
  }
  }
  
  decrease(id: number) {
    this.cartService.decreaseQuantity(id);
  }

  toggleCart(product: any) {
    if (this.cartService.isInCart(product.id)) {
      this.cartService.removeFromCart(product.id);
    } else {
      this.cartService.addToCart(product);
    }
  }

  isInCart(id: number): boolean {
    return this.cartService.isInCart(id);
  }
}
