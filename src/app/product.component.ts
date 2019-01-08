import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProdComponent {
  @Input() productItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.productItem);
  }
}
