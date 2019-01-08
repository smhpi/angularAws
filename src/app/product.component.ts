import { Component } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProdComponent {
  productTitle = "Lenovo ThinkPad E580";
  brand = "Lenovo";
  price = 1900;
  salesPrice = 1749;
}
