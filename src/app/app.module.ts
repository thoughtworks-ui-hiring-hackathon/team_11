import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
=======
import { HeaderComponent } from './shared/components/header.component/header.component.component';
>>>>>>> 882fd5e25d6cc08fc3d53c0dd1e537e56f59104c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MovieCardComponent
=======
    HeaderComponent
>>>>>>> 882fd5e25d6cc08fc3d53c0dd1e537e56f59104c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
