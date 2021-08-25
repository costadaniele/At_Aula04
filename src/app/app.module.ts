import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './sobre/sobre.component';
import { NumerosComponent } from './numeros/numeros.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'numeros', component: NumerosComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    SobreComponent,
    NavbarComponent,
    NumerosComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
