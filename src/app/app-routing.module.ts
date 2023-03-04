import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contactUs/contactUs.component';
import { PrivacyPolicyComponent } from './components/privacyPolicy/privacyPolicy.component';

const routes: Routes = [

  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component: HomeComponent},
  {path: 'ContactUs',component: ContactUsComponent },
  {path: 'PrivatePolicy',component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
