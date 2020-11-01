import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[inputReference]'
})
export class InputReferenceDirective {
  focus = false;

  @HostListener("focus")
  onFocus() {
    this.focus = true;
  }

  @HostListener("blur")
  onBlur() {
    this.focus = false;
  }
}
