import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cartService';
import { WishlistStore } from '../../store/wishlistStore';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  faCart = faCartShopping;
  faHeart = faHeart;
  cartCountValue = signal<number>(0);
  constructor(private cartService: CartService){}
  wishlistStore = inject(WishlistStore);
  
  ngOnInit(){
    this.cartCountValue = this.cartService.cartCount;
    this.cartService.loadCartFromStorage();
  }
}
