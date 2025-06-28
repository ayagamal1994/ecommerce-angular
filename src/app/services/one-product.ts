import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneProduct {
 
  constructor() { }

  private selectedProduct = signal<any>(null);

  setSelectedProduct(product:any){
    this.selectedProduct.set(product);
    localStorage.setItem("selectedproduct", JSON.stringify(product))
  }

  getSelectedProduct(){
    return this.selectedProduct
  }

  getProductFromLocalstorage(){
      const storedProduct = localStorage.getItem('selectedproduct');
      if(storedProduct){
        this.selectedProduct.set(JSON.parse(storedProduct))
      }
  }
}

