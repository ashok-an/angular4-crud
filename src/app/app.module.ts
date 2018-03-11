import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'user', component: UserComponent},
      { path: 'updateuser/:id', component: UpdateUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
