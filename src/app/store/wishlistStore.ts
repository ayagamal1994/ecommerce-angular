import { computed } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";

//const initialWishlistCount = 0;
//let favouriteProducts = signal<any[]>([]);
interface Product {
  id: number,
  title: string,
  price: number,
  discountPercentage: number, 
  description: string,
  rating: number,
  thumbnail: string,
  stock: number
};

// ✅ load from localStorage
const stored = localStorage.getItem('wishlist');
const initialWishProducts: Product[] = stored ? JSON.parse(stored) : [];

export const WishlistStore = signalStore(
  { providedIn: 'root' },

  withState<{ wishProducts: Product[] }>({
    //wishCounter: initialWishlistCount,
    wishProducts: initialWishProducts,
  }),

  withComputed((state) => ({
    totalCount: computed(() => state.wishProducts().length),
  })),

  withMethods((state) => ({
    addToFavourites: (product: Product) => {
      const current = state.wishProducts();
      const exists = current.some((p) => p.id === product.id);

      if (!exists) {
        const updated = [...current, product];
        patchState(state, {
          wishProducts: updated,
        });

        
        localStorage.setItem('wishlist', JSON.stringify(updated));
      }
    },

    removeFromFavourites: (productId: number) => {
      const updated = state.wishProducts().filter((p) => p.id !== productId);
      patchState(state, {
        wishProducts: updated,
      });

      
      localStorage.setItem('wishlist', JSON.stringify(updated));
    },

    inWish: (productId: number): boolean => {
      return state.wishProducts().some((p) => p.id === productId);
    },
    
  }))
);
