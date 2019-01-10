import { Component } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
  selector: "product-list",
  templateUrl: "product-list.component.html",
  styleUrls: ["product-list.component.css"]
})
export class ProductList {
  productItems;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productItems = this.productService.get();
  }
  onProductItemDelete(productItem) {
    this.productService.delete(productItem);
  }
}
