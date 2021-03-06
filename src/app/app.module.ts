import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { RouterModule } from "@angular/router";
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';


import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
     { path:'' , component:HomeComponent},
     { path:'login' , component:LoginComponent},
     { path:'products' , component:ProductsComponent},
     { path:'shopping-cart' , component:ShoppingCartComponent},

     { path:'check-out' , component:CheckOutComponent, canActivate : [AuthGuard]},
     { path:'order-success' , component:OrderSuccessComponent, canActivate : [AuthGuard]},
     { path:'my/orders' , component:MyOrdersComponent, canActivate : [AuthGuard]},
     
     { path:'admin/products' , component:AdminProductsComponent, canActivate : [AuthGuard]},
     { path:'admin/orders' , component:AdminOrdersComponent, canActivate : [AuthGuard]},
    ])
  ],
  providers: 
  [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
