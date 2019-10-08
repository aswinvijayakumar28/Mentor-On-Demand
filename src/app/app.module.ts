import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarIndexComponent } from './navbar-index/navbar-index.component';
import { ContentIndexComponent } from './content-index/content-index.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TrainerLoginComponent } from './trainer-login/trainer-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { TrainerSignUpComponent } from './trainer-sign-up/trainer-sign-up.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { TrainerMenuComponent } from './trainer-menu/trainer-menu.component';
import { UserCurrentTrainingsComponent } from './user-current-trainings/user-current-trainings.component';
import { UserCompletedTrainingsComponent } from './user-completed-trainings/user-completed-trainings.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchComponent } from './search/search.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminBlockUserComponent } from './admin-block-user/admin-block-user.component';

import { AdminEditTechnologiesComponent } from './admin-edit-technologies/admin-edit-technologies.component';
import { AdminEditTechnologies2Component } from './admin-edit-technologies2/admin-edit-technologies2.component';
import { AdminAddTechnologiesComponent } from './admin-add-technologies/admin-add-technologies.component';
import { TrainerCompletedTrainingsComponent } from './trainer-completed-trainings/trainer-completed-trainings.component';
import { TrainerCurrentTrainingsComponent } from './trainer-current-trainings/trainer-current-trainings.component';
import { TrainerEditSkillsComponent } from './trainer-edit-skills/trainer-edit-skills.component';
import { TrainerAddSkillsComponent } from './trainer-add-skills/trainer-add-skills.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { NotificationComponent } from './notification/notification.component';
import { TrainerPaymentHistoryComponent } from './trainer-payment-history/trainer-payment-history.component';
import { TrainerPaymentWithdrawComponent } from './trainer-payment-withdraw/trainer-payment-withdraw.component';
import { TrainerRegisterSkillsComponent } from './trainer-register-skills/trainer-register-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarIndexComponent,
    ContentIndexComponent,
    HomeComponent,
    UserLoginComponent,
    TrainerLoginComponent,
    UserSignUpComponent,
    TrainerSignUpComponent,
    AdminLoginComponent,
    UserMenuComponent,
    TrainerMenuComponent,
    UserCurrentTrainingsComponent,
    UserCompletedTrainingsComponent,
    UserSearchComponent,
    SearchComponent,
    AdminMenuComponent,
    AdminBlockUserComponent,
  
    AdminEditTechnologiesComponent,
    AdminEditTechnologies2Component,
    AdminAddTechnologiesComponent,
    TrainerCompletedTrainingsComponent,
    TrainerCurrentTrainingsComponent,
    TrainerEditSkillsComponent,
    TrainerAddSkillsComponent,
    TrainerProfileComponent,
    NotificationComponent,
    TrainerPaymentHistoryComponent,
    TrainerPaymentWithdrawComponent,
    TrainerRegisterSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
