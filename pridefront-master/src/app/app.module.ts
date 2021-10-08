import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { PatientsComponent } from './patients/patients.component';
import { ContactComponent } from './contact/contact.component';
import { NgxMaskModule } from 'ngx-mask';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FindProfessionalsComponent } from './find-professionals/find-professionals.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalsComponent,
    HomeComponent,
    PatientsComponent,
    ContactComponent,
    ComplaintComponent,
    FeedbackComponent,
    FindProfessionalsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
