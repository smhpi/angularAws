import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./app-home.component";
import { ProdComponent } from "./product.component";
import { ProductList } from "./product-list.component";
import { FavoritDirective } from "./favorit.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { NewProduct } from "./new-product.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdComponent,
    ProductList,
    FavoritDirective,
    CategoryListPipe,
    NewProduct
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
