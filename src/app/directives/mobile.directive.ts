import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mobile]'
})
export class MobileDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') onKeyUp(){
    let text=this.el.nativeElement.value as string;
    let lastChar=text.substring(text.length-1);
    //alert(lastChar);
    if(isNaN(+lastChar))
    {
      this.el.nativeElement.value=text.substring(0,text.length-1)
    }
    else
    {
      
    }
  }


}
