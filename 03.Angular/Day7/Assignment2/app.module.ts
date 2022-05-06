import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShadowsdirectiveDirective } from './shadowsdirective.directive';
import { IsAdminDirective } from './is-admin.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShadowsdirectiveDirective,
    IsAdminDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
