import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./app-home.component";
import { ProdComponent } from "./product.component";
import { ProductList } from "./product-list.component";
import { FavoritDirective } from "./favorit.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdComponent,
    ProductList,
    FavoritDirective,
    CategoryListPipe
  ],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
