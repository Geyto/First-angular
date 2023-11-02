import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CounterService]
})
export class ProductComponent {
  @Input() product: ProductType = {image: "", title: "", amount: 0, price: 0,}
  @Output() addToEvent:EventEmitter<ProductType> = new EventEmitter<ProductType>()

  constructor() {
  }

  addProductCard() {
    this.addToEvent.emit(this.product)
  }
}
