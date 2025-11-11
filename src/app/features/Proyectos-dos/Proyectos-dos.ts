import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosService } from './services/proyectos-service';
import { ProyectoListados } from "../Proyectos-page/components/proyecto-listados/proyecto-listados";
import { AddProyecto } from '../Proyectos-page/components/add-proyecto/add-proyecto';

@Component({
  selector: 'proyectos-dos',
  standalone: true,
  imports: [ProyectoListados, AddProyecto],
  templateUrl: './Proyectos-dos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDos { 
  proyectosService = inject(ProyectosService);

  onProyectoAgregado(nuevoProyecto: any) {
    this.proyectosService.addProyecto(nuevoProyecto);
  }

  proyectos = this.proyectosService.proyectos;
}
