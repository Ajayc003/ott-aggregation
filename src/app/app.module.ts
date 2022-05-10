import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthServiceService } from './auth-service.service';
// import { TokensInterceptorService } from './tokens-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [AuthGuardGuard,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
