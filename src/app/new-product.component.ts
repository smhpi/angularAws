import { Component, Inject } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";

import { ProductService } from "./product.service";
import { lookupListToken } from "./provider";

@Component({
  selector: "new-item",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.html"]
})
export class NewProduct {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private producService: ProductService,
    @Inject(lookupListToken) public lookupLists
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+")
        ])
      ),
      details: this.formBuilder.control(""),
      brand: this.formBuilder.control(""),
      sku: this.formBuilder.control(""),
      category: this.formBuilder.control(""),
      price: this.formBuilder.control(
        0,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ),
      salesPrice: this.formBuilder.control(
        0,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ),
      quantity: this.formBuilder.control(
        0,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      )
    });
  }

  onSubmit(productItem) {
    this.producService.add(productItem);
  }
}
