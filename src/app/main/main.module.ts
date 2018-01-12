import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

import { MainComponent } from './main.component';
import { MainService } from './services/main.service';
import { EsacAddComponent } from './esac-add/esac-add.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
import { EsacAddNewComponent } from './esac-add/esac-add-new/esac-add-new.component'

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
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent, EsacAddComponent, EsacConvertDialogComponent, EsacAddNewComponent],
  entryComponents: [EsacAddComponent, EsacConvertDialogComponent],
  providers: [MainService]
})
export class MainModule { }
