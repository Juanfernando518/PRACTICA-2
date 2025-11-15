import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ ProyectoInt } from './interfaces/Proyecto-int';
import { ProyectoListados } from "./components/proyecto-listados/proyecto-listados";

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [FormsModule, ProyectoListados],
  templateUrl: './Proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {

  name = signal('');
  descripcion = signal('');


  proyectos = signal<ProyectoInt[]>([
    {
      id: 1,
      nombre: 'Proyecto A',
      descripcion: 'Descripcion'
    }
  ]);

  agregarProyecto() {
    const nombre = this.name().trim();
    const descripcion = this.descripcion().trim();

    if (!nombre || !descripcion) return; 

    const nuevoProyecto: ProyectoInt = {
      id: this.proyectos().length + 1,
      nombre,
      descripcion
    };

    this.proyectos.update(lista => [...lista, nuevoProyecto]);

    this.name.set('');
    this.descripcion.set('');
  }
}
