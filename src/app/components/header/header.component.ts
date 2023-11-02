import { Component } from '@angular/core';
import {PhoneService} from "../../services/phone.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[PhoneService]
})
export class HeaderComponent {
  constructor(private phoneService:PhoneService) {
  }
  public phone: string = this.phoneService.phone
}
