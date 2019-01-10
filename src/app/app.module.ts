import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./app-home.component";
import { ProdComponent } from "./product.component";
import { ProductList } from "./product-list.component";
import { FavoritDirective } from "./favorit.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { NewProduct } from "./new-product.component";
import { ProductService } from "./product.service";
import { routing } from "./app.routing";
import { lookupListToken, lookupLists } from "./provider";

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
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing],
  providers: [
    ProductService,
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
