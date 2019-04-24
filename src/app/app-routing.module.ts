import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { ProductsAllComponent } from './components/products/products-all/products-all.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductsUserComponent } from './components/products/products-user/products-user.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'create', component: CreateProductComponent},
{ path: 'product/all', component: ProductsAllComponent },
{ path: 'product/details/:id', component: ProductDetailsComponent },
{path: 'product/user', component: ProductsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
