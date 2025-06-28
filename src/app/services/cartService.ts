import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    
  ) { }

  private cartItems= signal<any[]>([]);

  cartCount = signal(0);

  addToCart(item:any){
    let currentCartItems = [...this.cartItems()];
    let found = false;

    for (let product of currentCartItems) {
      if (product.id === item.id) {
        product.quantity += 1;
        found = true;
        break;
      }
    }

    if (!found) {
      currentCartItems.push({ ...item, quantity: 1 });
    }
    this.cartItems.set(currentCartItems);
    this.cartCount.set(this.calculateTotalCount(currentCartItems));
    localStorage.setItem('cart', JSON.stringify(currentCartItems));

  }
  isInCart(id: number): boolean {
  const items = this.cartItems();
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      return true;
    }
  }
  return false;
  }
  removeFromCart(id:number){
    let currentCartItems = [...this.cartItems()];

    for (let i=0; i<currentCartItems.length; i++){
      if(currentCartItems[i].id === id){
        currentCartItems.splice(i, 1);
        break;
      }
    }

    this.cartItems.set(currentCartItems);
    this.cartCount.set(this.calculateTotalCount(currentCartItems));
    localStorage.setItem('cart', JSON.stringify(currentCartItems));
  }

  
  increaseQuantity(id: number) {
    const current = [...this.cartItems()];

    for (let item of current) {
      if (item.id === id) {
        item.quantity += 1;
        break;
      }
    }

    this.cartItems.set(current);
    this.cartCount.set(this.calculateTotalCount(current));
    localStorage.setItem('cart', JSON.stringify(current));
  }

  decreaseQuantity(id: number) {
    const current = [...this.cartItems()];

    for (let i = 0; i < current.length; i++) {
      if (current[i].id === id) {
        if (current[i].quantity > 1) {
          current[i].quantity -= 1;
        } else {
          current[i].quantity =1;
        }
        break;
      }
    }

    this.cartItems.set(current);
    this.cartCount.set(this.calculateTotalCount(current));
    localStorage.setItem('cart', JSON.stringify(current));
  }

  private calculateTotalCount(items: any[]): number {
    let total = 0;
    for (let item of items) {
      total += item.quantity;
    }
    return total;
  }

  getCartItems(){
    return this.cartItems;
  }

  loadCartFromStorage() {
    const stored = localStorage.getItem('cart');
    if (stored) {
      this.cartItems.set(JSON.parse(stored));
      this.cartCount.set(this.calculateTotalCount(JSON.parse(stored)));
    }
  }

  
}


