import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { MainComponent } from './main.component';
import { MainService } from './services/main.service'

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
    RouterModule.forChild(appRoutes)
  ],
  declarations: [MainComponent],
  providers: [MainService]
})
export class MainModule { }
