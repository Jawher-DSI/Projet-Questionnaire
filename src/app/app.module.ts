import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireListeComponent } from './questionnaire-liste/questionnaire-liste.component';
import { AffquestionnaireComponent } from './affquestionnaire/affquestionnaire.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContacternousComponent } from './contacternous/contacternous.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionnaireListeComponent,
    AffquestionnaireComponent,
    EditQuestionnaireComponent,
    NavigationComponent,
    ContacternousComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
