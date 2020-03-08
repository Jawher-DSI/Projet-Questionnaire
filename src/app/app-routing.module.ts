import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireListeComponent } from './questionnaire-liste/questionnaire-liste.component';
import { AffquestionnaireComponent } from './affquestionnaire/affquestionnaire.component';
import { EditQuestionnaireComponent } from './edit-questionnaire/edit-questionnaire.component';
import { ContacternousComponent } from '../app/contacternous/contacternous.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'questionnaireliste', component:QuestionnaireListeComponent,canActivate:[LoginGuard]},
  {path:'questionnaireliste/:id',component:AffquestionnaireComponent,canActivate:[LoginGuard]},
  {path:'ajoutquestionnaire', component:QuestionnaireComponent,canActivate:[LoginGuard]},
  {path:'editquestionnaire/:id',component:EditQuestionnaireComponent,canActivate:[LoginGuard]},
  {path:'contacternous',component:ContacternousComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

