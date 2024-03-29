import { NgModule } from '@angular/core';
import { ErrorInterceptor } from './interceptors/error-interceptor.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthenticationService } from './authentication/authentication.service';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [AuthenticationService, AuthGuardService, ErrorInterceptor]
})
export class CoreModule { }
