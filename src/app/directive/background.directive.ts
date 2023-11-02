import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{
  @HostListener('mouseenter')
  onHover(){
    this.changeElementColor("blue");
  }
  @HostListener("mouseleave")
  onLeave(){
    this.changeElementColor("linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)");
  }
  constructor(private el:ElementRef, private rend: Renderer2) {

  }
  ngOnInit() {
  }
  changeElementColor(color:string){
    this.rend.setStyle(this.el.nativeElement, 'background', color)
  }
}
