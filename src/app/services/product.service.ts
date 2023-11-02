import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  getProduct():ProductType[] {
    return[
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
  }
  constructor() { }
}
