import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule, MatChipsModule, MatChip } from '@angular/material';

import { MainService } from './services/main.service';

import { MainComponent } from './main.component';
import { EsacAddComponent } from './esac-add/esac-add.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
import { EsacAddNewComponent } from './esac-add/esac-add-new/esac-add-new.component';
import { EsacAddFileComponent } from './esac-add/esac-add-file/esac-add-file.component'

const appRoutes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatChipsModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent, EsacAddComponent, EsacConvertDialogComponent, EsacAddNewComponent, EsacAddFileComponent],
  entryComponents: [EsacAddComponent, EsacConvertDialogComponent],
  providers: [MainService]
})
export class MainModule { }
