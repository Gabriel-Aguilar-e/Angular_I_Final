import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule }from '@angular/material/button';
import { RymService } from '../../services/rym.service';

@Component({
  selector: 'app-dialog',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  personaje: any;
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
image: any;
location: any;
origin: any;
gender: any;
type: any;
species: string; id: string, name: string 
},
    private rymService: RymService
  ) {}

  ngOnInit(): void {
    console.log('ID recibido en el diálogo:', this.data.id);

    const id = this.data.id;
    if (this.rymService) {
      this.rymService.obtenerPersonaje(id).subscribe((data: any) => {
        console.log('Datos del personaje:', data);
        this.personaje = data;
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}