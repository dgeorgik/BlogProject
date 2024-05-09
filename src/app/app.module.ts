import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfEnrtiesComponent } from './components/list-of-enrties/list-of-enrties.component';
import { FormAdditionComponent } from './components/form-addition/form-addition.component';
import { ListOfArchiveComponent } from './components/list-of-archive/list-of-archive.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListOfEnrtiesComponent,
    FormAdditionComponent,
    ListOfArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
