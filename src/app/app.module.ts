import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
    { path: 'heroes', component: HeroesComponent }, 
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'detail/:id', component: HeroDetailComponent }, 
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

