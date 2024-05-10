import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RunDetailsComponent } from './run-details/run-details.component';
import { SummaryComponent } from './summary/summary.component';
import { AddRunComponent } from './add-run/add-run.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,FavoritesComponent,LoginComponent,ProfileComponent,RunDetailsComponent,SummaryComponent, AddRunComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}