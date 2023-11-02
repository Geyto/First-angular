import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {PhoneService} from "../../services/phone.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers:[PhoneService]
})
export class FooterComponent {
  constructor(private phoneService:PhoneService) {
  }
  public instagramLink: string = "#"
  public phone = this.phoneService.phone
}
