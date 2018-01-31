import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatProgressBarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatSliderModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { ConverterService } from './services/converter.service';
import { SharedModule } from '../shared/shared.module';

import { ConverterComponent } from './converter.component';
import { EsacConvertFileComponent } from './esac-convert-file/esac-convert-file.component';
import { EsacConvertNewComponent } from './esac-convert-new/esac-convert-new.component';
import { EsacConvertResultComponent } from './esac-convert-result/esac-convert-result.component';
import { MidiConvertFileComponent } from './midi-convert-file/midi-convert-file.component';
import { MidiConvertResultComponent } from './midi-convert-result/midi-convert-result.component';

const appRoutes: Routes = [
  { path: 'converter', component: ConverterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatSliderModule,
    MatTooltipModule,
    MatSelectModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    ConverterComponent,
    EsacConvertFileComponent,
    EsacConvertNewComponent,
    EsacConvertResultComponent,
    MidiConvertFileComponent,
    MidiConvertResultComponent
  ],
  providers: [ConverterService]
})
export class ConverterModule { }
