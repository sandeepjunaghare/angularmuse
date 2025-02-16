import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

import { Logger } from './logger.service';

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Logger],
  bootstrap: [AppComponent],
})
export class AppModule {}
