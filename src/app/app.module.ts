import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TargetaCreditoComponent } from './components/targeta-credito/targeta-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetaCreditoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
