import { Component, inject, signal } from '@angular/core';
import { ProductsApi } from '../../services/products-api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OneProduct } from '../../services/one-product';
import { CartService } from '../../services/cartService';
import { PricediscountPipe } from '../../pipe/pricediscount-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { WishlistStore } from '../../store/wishlistStore';

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

@Component({
  selector: 'app-all-products',
  imports: [CommonModule, PricediscountPipe, FontAwesomeModule],
  templateUrl: './all-products.html',
  styleUrl: './all-products.scss'
}) 

export class AllProducts {
  
  products = signal<Product[]>([]);
  faHeart = faHeart;

  wishlistStore = inject(WishlistStore);

  constructor(
    private productsApi: ProductsApi,
    private oneProduct: OneProduct,
    private router: Router,
    private cartService: CartService
  ){}

  viewProduct(product:any){
    this.oneProduct.setSelectedProduct(product),
    this.router.navigate(["product", product.id])

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
  ngOnInit(){
    this.productsApi.getProducts().subscribe({
      next: (data:any) => {this.products.set(data.products as any)
        console.log(data.products)
      },
      error: err => console.error("failed to load products", err)
      
    })
    
  }

  
}
