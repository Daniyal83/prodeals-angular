import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SavingComponent } from './saving/saving.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { HomeComponent } from 'components/home/home/home.component';
import { ProductDetailsComponent } from 'components/product-details/product-details.component';

const routes: Routes = [
  {path: 'main', component: MainInfoComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'filtered/:filter', component: HomeComponent}
  ]},
  {path: 'about', component: AboutComponent, data: {animation: "about"}},
  {path: 'instructions', component: InstructionsComponent, data: {animation: "instructions"}},
  {path: 'contacts', component: ContactsComponent, data: {animation: "contacts"}},
  {path: 'saving', component: SavingComponent, data: {animation: "saving"}},
  {path: 'search-result', component: SearchResultComponent, data: {animation: "search"}},
  {path: 'product-details/:title', component: ProductDetailsComponent, data: {animation: "product-details"}},
  {path: '**', component: HomeComponent, data: {animation: "unknown"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppRoutingModule { }
export const routingComponents = [
    MainInfoComponent,
    HomeComponent,
    AboutComponent,
    InstructionsComponent,
    ContactsComponent,
    SavingComponent,
    SearchResultComponent,
    ProductDetailsComponent
]
