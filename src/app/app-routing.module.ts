import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './container/home/home.component';
import { HeaderComponent } from './container/header/header.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Home', component: ContainerComponent},
  {path: 'Shop', component:ShopComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Cart', component:CartComponent},
  {path:'Checkout', component:CheckoutComponent},
  {path: 'Thankyou', component:ThankyouComponent},
  {path:'Service',component:ServiceComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
