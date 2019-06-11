import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SavingComponent } from './saving/saving.component';
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
import { SearchResultComponent } from './components/search-result/search-result.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { HomeComponent } from './components/home/home/home.component';
import { OffersComponent } from './components/home/offers/offers.component';
import { ButtonComponent } from './components/buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainInfoComponent,
    AboutComponent,
    InstructionsComponent,
    ContactsComponent,
    SavingComponent,
    LeftBlockComponent,
    RightBlockComponent,
    FooterComponent,
    BrandsComponent,
    ProductComponent,
    SpecialComponent,
    TitleComponent,
    SearchComponent,
    SearchResultComponent,
    WelcomeComponent,
    HomeComponent,
    OffersComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({product: reducers.product})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
