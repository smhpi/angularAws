import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./app-home.component";
import { ProdComponent } from "./product.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [AppComponent, HomeComponent, ProdComponent],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
