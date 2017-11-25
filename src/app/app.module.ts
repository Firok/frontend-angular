import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
