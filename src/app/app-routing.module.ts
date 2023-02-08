import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MeatsComponent } from './meats/meats.component';
import { ViewFruitsComponent } from './view-fruits/view-fruits.component';
import { ViewGroceriesComponent } from './view-groceries/view-groceries.component';
import { ViwVegitablesComponent } from './viw-vegitables/viw-vegitables.component';

const routes: Routes = [
  {path:'',component:FirstpageComponent},
  {path:'view-vegitables',component:ViwVegitablesComponent},
  {path:'view-fruits',component:ViewFruitsComponent},
  {path:'view-groceries',component:ViewGroceriesComponent},
  {path:'view-meats',component:MeatsComponent},
  {path:'view-cart',component:CartComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
