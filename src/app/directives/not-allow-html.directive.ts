import { Directive } from '@angular/core';

@Directive({
  selector: '[appNotAllowHtml]'
})
export class NotAllowHtmlDirective {

  constructor() { }

}
