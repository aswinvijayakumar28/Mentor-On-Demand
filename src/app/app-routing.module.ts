import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContentIndexComponent} from './content-index/content-index.component';
import {NavbarIndexComponent} from './navbar-index/navbar-index.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {TrainerLoginComponent} from './trainer-login/trainer-login.component';
import {UserSignUpComponent} from './user-sign-up/user-sign-up.component';
import {TrainerSignUpComponent} from './trainer-sign-up/trainer-sign-up.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {TrainerMenuComponent} from './trainer-menu/trainer-menu.component';
import {UserCurrentTrainingsComponent} from './user-current-trainings/user-current-trainings.component';
import {UserCompletedTrainingsComponent} from './user-completed-trainings/user-completed-trainings.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {SearchComponent} from './search/search.component';
import {AdminMenuComponent} from './admin-menu/admin-menu.component';
import {AdminBlockUserComponent} from './admin-block-user/admin-block-user.component';

import {AdminEditTechnologiesComponent} from './admin-edit-technologies/admin-edit-technologies.component';
import {AdminEditTechnologies2Component} from './admin-edit-technologies2/admin-edit-technologies2.component';
import {AdminAddTechnologiesComponent} from './admin-add-technologies/admin-add-technologies.component';
import {TrainerCompletedTrainingsComponent} from './trainer-completed-trainings/trainer-completed-trainings.component';
import {TrainerCurrentTrainingsComponent} from './trainer-current-trainings/trainer-current-trainings.component';
import {TrainerEditSkillsComponent} from './trainer-edit-skills/trainer-edit-skills.component';
import {TrainerAddSkillsComponent} from './trainer-add-skills/trainer-add-skills.component';
import {TrainerProfileComponent} from './trainer-profile/trainer-profile.component';
import {NotificationComponent} from './notification/notification.component';
import {TrainerPaymentHistoryComponent} from './trainer-payment-history/trainer-payment-history.component';
import {TrainerPaymentWithdrawComponent} from './trainer-payment-withdraw/trainer-payment-withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home',component:HomeComponent},
  { path: 'content-index',component:ContentIndexComponent},
  { path: 'navbar-index',component:NavbarIndexComponent},
  { path: 'user-login',component:UserLoginComponent},
  { path:'trainer-login', component:TrainerLoginComponent},
  { path: 'user-sign-up',component:UserSignUpComponent},
  { path: 'trainer-sign-up',component:TrainerSignUpComponent},
  { path: 'admin-login',component:AdminLoginComponent},
  { path:'user-menu',component:UserMenuComponent},
  { path:'trainer-menu',component:TrainerMenuComponent},
  { path:'user-current-trainings',component:UserCurrentTrainingsComponent},
  { path:'user-completed-trainings',component:UserCompletedTrainingsComponent},
  {path:'user-search',component:UserSearchComponent},
  {path :'search' , component:SearchComponent},
  {path:'admin-menu',component:AdminMenuComponent},
  {path:'admin-block-user',component:AdminBlockUserComponent},
 
  {path:'admin-edit-technologies',component:AdminEditTechnologiesComponent},
  {path:'admin-edit-technologies2',component:AdminEditTechnologies2Component},
  {path:'admin-add-technologies',component:AdminAddTechnologiesComponent},
  {path:'trainer-completed-trainings',component:TrainerCompletedTrainingsComponent},
  {path:'trainer-current-trainings',component:TrainerCurrentTrainingsComponent},
  {path:'trainer-edit-skills',component:TrainerEditSkillsComponent},
  {path:'trainer-add-skills',component:TrainerAddSkillsComponent},
  {path:'trainer-profile',component:TrainerProfileComponent},
  {path:'notification',component:NotificationComponent},
  {path:'trainer-payment-history',component:TrainerPaymentHistoryComponent},
  {path:'trainer-payment-withdraw',component:TrainerPaymentWithdrawComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
