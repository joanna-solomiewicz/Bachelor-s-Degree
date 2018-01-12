import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatIconModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatChipsModule } from '@angular/material';

import { ConverterComponent } from './converter.component';
import { EsacConvertFileComponent } from './esac-convert-file/esac-convert-file.component';

import { ConverterService } from './services/converter.service';
import { EsacNewComponent } from './esac-new/esac-new.component';
import { EsacResultComponent } from './esac-result/esac-result.component';

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
    RouterModule.forChild(appRoutes)
  ],
  declarations: [ConverterComponent, EsacConvertFileComponent, EsacNewComponent, EsacResultComponent],
  providers: [ConverterService]
})
export class ConverterModule { }
