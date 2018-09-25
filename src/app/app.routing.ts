import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import { FacebookDetailsComponent } from "./components/facebook-details/facebook.component";

const routes: Routes =[
    { path: 'login',   component: LoginComponent },
    { path: 'home',   component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'facebook-chat', component: FacebookDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
