import { ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { RymService } from '../../services/rym.service';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-personajes',
  imports: [MaterialModule, MatCardModule, MatPaginatorModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class PersonajesComponent implements OnInit {
  personajes: MatTableDataSource<any> = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  readonly dialog = inject(MatDialog);

  constructor(private rymService: RymService) { }

  ngOnInit(): void {
    this.rymService.obtenerPersonajes(id).subscribe((data: any) => {
      console.log(data);
      this.personajes.data = data.results;
      this.personajes.paginator = this.paginator;
    });
  }

  openDialog(id: string): void {
    console.log('ID enviado al diálogo:', id);
    this.dialog.open(DialogComponent, {
      data: { id }
    });
  }
}
