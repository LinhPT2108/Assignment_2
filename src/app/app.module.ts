import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FunctionComponent } from './function/function.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    FunctionComponent,
    FeedbackComponent,
    MainContentComponent,
    SubjectsComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    NotificationComponent,
    ModalAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
