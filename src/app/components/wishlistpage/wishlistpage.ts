import { Component, inject } from '@angular/core';
import { WishlistStore } from '../../store/wishlistStore';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlistpage',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './wishlistpage.html',
  styleUrl: './wishlistpage.scss'
})
export class Wishlistpage {
  wishlistStore = inject(WishlistStore);
  faTrash = faTrash;

  get wishItems() {
    return this.wishlistStore.wishProducts;
  }

  remove(id: number) {
    this.wishlistStore.removeFromFavourites(id);
  }
}
