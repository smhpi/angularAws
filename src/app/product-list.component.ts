import { Component } from "@angular/core";

@Component({
  selector: "product-list",
  templateUrl: "product-list.component.html",
  styleUrls: ["product-list.component.css"]
})
export class ProductList {
  onProductItemDelete(productItem) {}
  productItems = [
    {
      id: 1,
      sku: "CSDL10001",
      productTitle: "Lenovo ThinkPad E580",
      brand: "Lenovo",
      price: 1900,
      salesPrice: 1749,
      quantity: 12,
      category: "Laptop",
      isFavorite: true
    },
    {
      id: 2,
      sku: "CSDL10002",
      productTitle: "Lenovo ThinkPad T580",
      brand: "Lenovo",
      price: 2300,
      salesPrice: 1938,
      quantity: 10,
      category: "Laptop",
      isFavorite: true
    },
    {
      id: 3,
      sku: "CSDL10003",
      productTitle: "Lenovo ThinkPad T480",
      brand: "Lenovo",
      price: 2250,
      salesPrice: 2019,
      quantity: 5,
      category: "Desktop",
      isFavorite: false
    },
    {
      id: 4,
      sku: "CSDL10004",
      productTitle: "Lenovo ThinkPad T480",
      brand: "Lenovo",
      price: 2250,
      salesPrice: 2019,
      quantity: 0,
      category: "Monitor",
      isFavorite: true
    }
  ];
}
