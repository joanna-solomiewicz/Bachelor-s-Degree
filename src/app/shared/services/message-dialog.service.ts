import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Injectable()
export class MessageDialogService {

  private message;

  constructor(
    public dialog: MatDialog,
  ) { }

  public displayMessageDialog(message: string): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      autoFocus: true,
      minWidth: 300,
      disableClose: true,
      data: message
    });
  }

}
