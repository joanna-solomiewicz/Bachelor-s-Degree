import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsacMidiConversionModule } from './esac-midi-conversion/esac-midi-conversion.module';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EsacMidiConversionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
