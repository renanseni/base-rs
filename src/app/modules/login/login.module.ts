import { AuthenticationService } from './../../core/authentication/authentication.service';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [AuthenticationService]
})
export class LoginModule { }
