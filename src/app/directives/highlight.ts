import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 0 15px gold');
    // this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.02)');
    // this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
    // this.renderer.removeStyle(this.el.nativeElement, 'transform');
  }
}
