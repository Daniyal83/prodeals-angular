import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { AboutComponent } from './about/about.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SavingComponent } from './saving/saving.component';

const routes: Routes = [
  {path: 'main', component: MainInfoComponent},
  {path: 'about', component: AboutComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'saving', component: SavingComponent},
  { path: '**', component: MainInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
