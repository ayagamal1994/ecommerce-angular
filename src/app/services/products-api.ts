import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get("https://dummyjson.com/products")
  }
}
