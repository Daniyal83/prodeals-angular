import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
