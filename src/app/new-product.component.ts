import { Component } from "@angular/core";

@Component({
  selector: "new-item",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.html"]
})
export class NewProduct {
  onSubmit(title) {
    console.log(title);
  }
}
