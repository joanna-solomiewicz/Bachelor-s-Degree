import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './converter.component';

const appRoutes: Routes = [
  { path: 'converter', component: ConverterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [ConverterComponent]
})
export class ConverterModule { }
