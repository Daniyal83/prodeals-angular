import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './components/filters/brands/brands.component';
import { ProductComponent } from './components/product/product.component';
import { SpecialComponent } from './components/special/special.component';
import { TitleComponent } from './components/title/title.component';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './components/filters/categories/categories.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LabelValueComponent } from './components/label-value/label-value.component';
import { PhoneFeaturesComponent } from './components/product-features/phone-features/phone-features.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { MobileComponent } from './components/filters/mobile/mobile.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { ProjectorComponent } from './components/product-features/projector/projector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    LeftBlockComponent,
    RightBlockComponent,
    FooterComponent,
    BrandsComponent,
    ProductComponent,
    SpecialComponent,
    TitleComponent,
    SearchComponent,
    WelcomeComponent,
    OffersComponent,
    ButtonComponent,
    routingComponents,
    CategoriesComponent,
    ProductDetailsComponent,
    LabelValueComponent,
    PhoneFeaturesComponent,
    MobileComponent,
    BurgerMenuComponent,
    ProjectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    ClickOutsideModule,
    StoreModule.forRoot({product: reducers.product}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
