export class ProductService {
  get() {
    return this.productItems;
  }

  add(productItem) {
    this.productItems.push(productItem);
  }

  delete(productItem) {
    let index = this.productItems.indexOf(productItem);
    if (index >= 0) {
      this.productItems.splice(index, 1);
    }
  }

  productItems = [
    {
      id: 1,
      sku: "CSDL10001",
      title: "Lenovo ThinkPad E580",
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
      title: "Lenovo ThinkPad T580",
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
      title: "Lenovo ThinkPad T480",
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
      title: "Lenovo ThinkPad T480",
      brand: "Lenovo",
      price: 2250,
      salesPrice: 2019,
      quantity: 0,
      category: "Monitor",
      isFavorite: true
    }
  ];
}
