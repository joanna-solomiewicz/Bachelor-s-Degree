import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { EsacMidiConversionComponent } from './esac-midi-conversion/esac-midi-conversion.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    EsacMidiConversionComponent
  ],
  declarations: [
    EsacMidiConversionComponent
  ]
})
export class EsacMidiConversionModule { }
