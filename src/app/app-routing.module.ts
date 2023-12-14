import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ActivePageComponent } from './active-page/active-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/registerpage'},
  {path:'registerpage', component:RegisterPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'dashBoard', component:DashBoardComponent},
  {path:'productList', component:ProductListComponent},
  {path:'activePage', component:ActivePageComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
