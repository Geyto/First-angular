import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CounterService} from "./services/counter.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ProductService]
})
export class AppComponent implements OnInit{
  constructor(private productService:ProductService, public counterService:CounterService) {
  }
  public products:ProductType[] = []
  ngOnInit(){
    this.products = this.productService.getProduct()
  }

  public formValues={
    productName: '',
    nameUser: '',
    phone: ''
  }

  public showPresent:boolean = false
  public instagram: string = ''
  public scrollTo(target: HTMLElement):void {
    target.scrollIntoView({behavior: "smooth"});
  }
  public choseProductInOrder(product:ProductType, element:HTMLElement):void {
    this.counterService.countPrice += product.price;
    if (this.counterService.countPrice){
      const block:HTMLElement | null = document.getElementById('block__price');
      if (block){
        block.style.opacity = '1';
        block.style.transform = 'translate(0, 0)';
      }
    }
    this.counterService.countProduct++
    this.scrollTo(element);
    this.formValues.productName = product.title.toUpperCase();
    alert(product.title + ' добавлен в корзину!')
  }
}
