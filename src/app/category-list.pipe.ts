import { Pipe } from "@angular/core";

@Pipe({
  name: "categoryList",
  pure: true
})
export class CategoryListPipe {
  transform(productItems) {
    var categories = [];
    productItems.forEach(productItem => {
      if (categories.indexOf(productItem.category) <= -1) {
        categories.push(productItem.category);
      }
    });
    return categories.join(", ");
  }
}
