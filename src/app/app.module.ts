import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportantInformationComponent } from './components/important-information/important-information.component';
import { LocalDbInterceptor } from './localDb/local-db.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ImportantInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LocalDbInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
