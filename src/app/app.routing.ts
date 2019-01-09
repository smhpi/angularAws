import { Routes, RouterModule } from "@angular/router";

import { ProductList } from "./product-list.component";
import { NewProduct } from "./new-product.component";
import { HomeComponent } from "./app-home.component";

const appRoutes: Routes = [
  {
    path: "products",
    component: ProductList
  },
  {
    path: "new",
    component: NewProduct
  },
  {
    path: "",
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
