
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ArabicDatePipe } from './pipes/arabic-date.pipe';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { HeaderComponent } from './components/header/header.component';
import { RatingComponent } from './components/rating/rating.component';
import { RatingclsComponent } from './components/ratingcls/ratingcls.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NationalIdDirective } from './directives/national-id.directive';
import { MobileDirective } from './directives/mobile.directive';
import { NotAllowHtmlDirective } from './directives/not-allow-html.directive';
import { OnlyEnglishDirective } from './directives/only-english.directive';
import { OnlyArabicDirective } from './directives/only-arabic.directive';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,DetailsComponent, HomeComponent, AboutComponent, ContactComponent
    , NotFoundComponent, LoginComponent, ArabicDatePipe, MaxLengthPipe, HeaderComponent, RatingComponent, RatingclsComponent, LogoutComponent, LayoutComponent, NationalIdDirective, MobileDirective, NotAllowHtmlDirective, OnlyEnglishDirective, OnlyArabicDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
    ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
