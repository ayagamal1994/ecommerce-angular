import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "", redirectTo:"allproducts", pathMatch:"full"},
    {path: "allproducts", loadComponent:()=>import("./components/all-products/all-products").then(m=>m.AllProducts)},
    {path: "register", loadComponent:()=>import("./components/reactive-form/reactive-form").then(m=>m.ReactiveForm)},
    {path: "login", loadComponent:()=>import("./components/template-driven-form/template-driven-form").then(m=>m.TemplateDrivenForm)},
    {path: "product/:id", loadComponent:()=>import("./components/product/product").then(m=>m.Product)},
    {path: "cart", loadComponent:()=>import("./components/cart/cart").then(m=>m.Cart)},
    {path: "wishlist", loadComponent:()=>import("./components/wishlistpage/wishlistpage").then(m=>m.Wishlistpage)},
    {path: "**", loadComponent:()=>import("./components/not-found/not-found").then(m=>m.NotFound)},
];
