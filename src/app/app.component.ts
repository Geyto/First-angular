import { Component } from '@angular/core';
import {AdvantagesTypes} from "./types/advantages.types";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages:AdvantagesTypes[] = [
    {
      title: "Лучшие продукты",
      text: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители."
    },
    {
      title: "Много вкусов",
      text: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
    },
    {
      title: "Бисквитное тесто",
      text: "Все пирожные готовятся на бисквитном тесте с  качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      title: "Честный продукт",
      text: "Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г."
    }]
  public products:ProductType[] = [
    {
      image: "maca1.png",
      title: "Макарун с малиной",
      amount: 1,
      price: 1.70,
    },
    {
      image: "maca2.png",
      title: "Макарун с манго",
      amount: 1,
      price: 1.70,
    },
    {
      image: "maca3.png",
      title: "Пирог с ванилью",
      amount: 1,
      price: 1.70,
    },
    {
      image: "maca4.png",
      title: "Пирог с фисташками",
      amount: 1,
      price: 1.70,
    }
  ]
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
  public choseProductInOrder(product:string, element:HTMLElement):void {
    this.scrollTo(element);
    this.formValues.productName = product.toUpperCase();
  }
}
