import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RymService } from '../../services/rym.service';
import {MatCardModule} from '@angular/material/card';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-personajes',
  imports: [MaterialModule,MatCardModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PersonajesComponent implements OnInit{
  personajes : any[] = [];
  readonly dialog = inject(MatDialog);
  constructor(private rymService : RymService) {

  }
  ngOnInit(): void {
    this.rymService.obtenerPersonajes(id).subscribe((data: any) => {
      console.log(data);
      this.personajes = data.results;
    })
  }

  openDialog(id: string): void {
    console.log('ID enviado al diálogo:', id);
    this.dialog.open(DialogComponent, {
      data: { id }
    });
  }
}
