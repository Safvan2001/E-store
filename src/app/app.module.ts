import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ViwVegitablesComponent } from './viw-vegitables/viw-vegitables.component';
import { ViewFruitsComponent } from './view-fruits/view-fruits.component';
import { ViewGroceriesComponent } from './view-groceries/view-groceries.component';
import { MeatsComponent } from './meats/meats.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    ViwVegitablesComponent,
    ViewFruitsComponent,
    ViewGroceriesComponent,
    MeatsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
