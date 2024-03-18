import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { CategoryComponent } from './header/category/category.component';
import { ProductComponent } from './header/product/product.component';

const routes: Routes = [
  { path: '', component: HeaderComponent }, // Display HeaderComponent by default
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
