import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
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
  MatChip,
  MatSelectModule,
  MatSliderModule,
  MatTooltipModule
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { MainService } from './services/main.service';
import { MidiPlayerService } from './services/midi-player.service';
import { EsacService } from './services/esac.service';

import { MainComponent } from './main.component';
import { EsacAddDialogComponent } from './esac-add-dialog/esac-add-dialog.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
import { EsacAddNewComponent } from './esac-add-dialog/esac-add-new/esac-add-new.component';
import { EsacAddFileComponent } from './esac-add-dialog/esac-add-file/esac-add-file.component';
import { EsacEditDialogComponent } from './esac-edit-dialog/esac-edit-dialog.component';
import { EsacDeleteDialogComponent } from './esac-delete-dialog/esac-delete-dialog.component';
import { EsacCardComponent } from './esac-convert-dialog/esac-card/esac-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import { OneEsacConvertDialogComponent } from './one-esac-convert-dialog/one-esac-convert-dialog.component';

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
    MatSliderModule,
    MatTooltipModule,
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    MainComponent,
    EsacAddDialogComponent,
    EsacConvertDialogComponent,
    EsacAddNewComponent,
    EsacAddFileComponent,
    EsacEditDialogComponent,
    EsacDeleteDialogComponent,
    EsacCardComponent,
    MainCardComponent,
    OneEsacConvertDialogComponent
  ],
  entryComponents: [
    EsacAddDialogComponent,
    EsacConvertDialogComponent,
    EsacEditDialogComponent,
    EsacDeleteDialogComponent,
    OneEsacConvertDialogComponent
  ],
  providers: [
    MainService,
    MidiPlayerService,
    EsacService
  ]
})
export class MainModule { }
