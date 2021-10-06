import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

export class SmogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {

      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      this.dialog.open(SmogDialog, dialogConfig);

      dialogConfig.position = {
        top: '0',
        left: '0'
      };
  }
}

@Component({
  selector: 'smog-dialog',
  templateUrl: 'smog-dialog.html',
})
export class SmogDialog {}