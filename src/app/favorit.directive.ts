import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[prodFavorit]"
})
export class FavoritDirective {
  @HostBinding("class.is-favorite") isFavorit = true;
  @HostBinding("class.is-favorite-hovering") hovering = false;
  @HostListener("mouseenter") onMouseEnter() {
    this.hovering = true;
  }
  @HostListener("mouseleave") onmouseleave() {
    this.hovering = false;
  }
  @Input()
  set prodFavorit(value) {
    this.isFavorit = value;
  }
}
