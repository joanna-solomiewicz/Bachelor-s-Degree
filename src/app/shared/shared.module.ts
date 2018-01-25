import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { MessageDialogService } from './services/message-dialog.service';

import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [MessageDialogComponent],
  declarations: [MessageDialogComponent],
  entryComponents: [
    MessageDialogComponent
  ],
  providers: [
    MessageDialogService
  ]
})
export class SharedModule { }
