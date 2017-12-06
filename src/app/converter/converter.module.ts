import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatProgressBarModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ConverterComponent } from './converter.component';
import { EsacFileComponent } from './esac-file/esac-file.component';

import { ConverterService } from './services/converter.service';
import { EsacNewComponent } from './esac-new/esac-new.component';

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
    RouterModule.forChild(appRoutes)
  ],
  declarations: [ConverterComponent, EsacFileComponent, EsacNewComponent],
  providers: [ConverterService]
})
export class ConverterModule { }
