import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component'
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsModule } from './user-posts/user-posts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserPostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
