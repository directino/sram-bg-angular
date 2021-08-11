import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { FormsModule }   from '@angular/forms';

// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { CreateComponent } from './create/create.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { RecaptchaModule } from "ng-recaptcha";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    DetailComponent,
    MyPostsComponent,
    CreateComponent,
    ContactComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    RecaptchaModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }