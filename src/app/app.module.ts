import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsAllComponent } from './components/products/products-all/products-all.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { JwtInterceptorService } from './services/interceptors/jwt-interceptor.service';
import { DropdownDirective } from './components/navigation/dropdown.directive';
import { CollapseDirective } from './components/navigation/collapse.directive';
import { ProductsUserComponent } from './components/products/products-user/products-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CreateProductComponent,
    ProductComponent,
    ProductsAllComponent,
    ProductDetailsComponent,
    DropdownDirective,
    CollapseDirective,
    ProductsUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
  useClass:JwtInterceptorService,
multi:true},
AuthService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
