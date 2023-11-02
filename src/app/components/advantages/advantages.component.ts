import { Component } from '@angular/core';
import {AdvantagesTypes} from "../../types/advantages.types";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
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
}
