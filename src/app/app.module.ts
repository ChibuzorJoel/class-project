import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { ContainerComponent } from './app/container/container.component';
import { LayoutComponent } from './app/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './app/container/product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './app/container/product-list/product/product.component';
import { FilterComponent } from './app/container/product-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
