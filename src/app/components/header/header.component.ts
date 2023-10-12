import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public phone: string = '+375 (29) 368-98-70'
}
