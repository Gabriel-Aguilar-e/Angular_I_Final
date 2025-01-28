import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  } from '';

@Component({
  selector: 'app-character-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class CharacterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Character
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
