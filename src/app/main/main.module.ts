import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { MainComponent } from './main.component';
import { MainService } from './services/main.service';
import { EsacAddComponent } from './esac-add/esac-add.component'

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
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent, EsacAddComponent],
  entryComponents: [EsacAddComponent],
  providers: [MainService]
})
export class MainModule { }
