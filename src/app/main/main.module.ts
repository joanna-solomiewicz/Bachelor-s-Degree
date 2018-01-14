import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule, MatChipsModule, MatChip, MatSelectModule } from '@angular/material';

import { MainService } from './services/main.service';

import { MainComponent } from './main.component';
import { EsacAddDialogComponent } from './esac-add-dialog/esac-add-dialog.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
import { EsacAddNewComponent } from './esac-add-dialog/esac-add-new/esac-add-new.component';
import { EsacAddFileComponent } from './esac-add-dialog/esac-add-file/esac-add-file.component';
import { EsacEditDialogComponent } from './esac-edit-dialog/esac-edit-dialog.component';
import { EsacDeleteDialogComponent } from './esac-delete-dialog/esac-delete-dialog.component'

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
    MatSelectModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent, EsacAddDialogComponent, EsacConvertDialogComponent, EsacAddNewComponent, EsacAddFileComponent, EsacEditDialogComponent, EsacDeleteDialogComponent],
  entryComponents: [EsacAddDialogComponent, EsacConvertDialogComponent, EsacEditDialogComponent, EsacDeleteDialogComponent],
  providers: [MainService]
})
export class MainModule { }
