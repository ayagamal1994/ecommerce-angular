import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricediscount'
})
export class PricediscountPipe implements PipeTransform {

  transform(price: number, discount: number): string {
    if(!discount || discount<=0){
      return `${price}$`
    }
    return `${Math.round(price - ((price*discount)/100))}$`;
  }

}
