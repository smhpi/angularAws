import { Routes, RouterModule } from "@angular/router";

import { ProdComponent } from "./product.component";
import { HomeComponent } from "./app-home.component";

const appRoutes: Routes = [
  {
    path: "product",
    component: ProdComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
