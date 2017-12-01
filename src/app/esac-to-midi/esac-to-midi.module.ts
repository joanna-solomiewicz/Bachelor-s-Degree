import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatTabsModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { EsacToMidiComponent } from './esac-to-midi.component';
import { UploadEsacFileComponent } from './upload-esac-file/upload-esac-file.component';
import { NewEsacComponent } from './new-esac/new-esac.component';
import { EditEsacComponent } from './edit-esac/edit-esac.component';

import { EsacToMidiService } from './services/esac-to-midi.service';

const appRoutes: Routes = [
  { path: 'esactomidi', component: EsacToMidiComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    EsacToMidiComponent
  ],
  declarations: [
    EsacToMidiComponent,
    UploadEsacFileComponent,
    NewEsacComponent,
    EditEsacComponent,
  ],
  providers: [
    EsacToMidiService
  ]
})
export class EsacToMidiModule { }
