import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public instagramLink: string = "#"
  private headerComponent:HeaderComponent = new HeaderComponent();
  public numberPhone = this.headerComponent.phone
}
