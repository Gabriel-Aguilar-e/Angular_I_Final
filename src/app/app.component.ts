import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesComponent } from "./core/components/personajes/personajes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploRickAndMorty';
}
