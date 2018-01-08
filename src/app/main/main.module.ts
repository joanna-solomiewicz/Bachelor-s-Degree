import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule } from '@angular/material';

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
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent, EsacAddComponent],
  entryComponents: [EsacAddComponent],
  providers: [MainService]
})
export class MainModule { }
