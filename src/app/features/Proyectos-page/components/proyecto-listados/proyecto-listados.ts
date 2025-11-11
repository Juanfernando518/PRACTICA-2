import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoInt } from '../../interfaces/Proyecto-int';

@Component({
  selector: 'proyecto-listados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-listados.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoListados {
  // nombre del listado (texto del título)
  listName = input.required<string>();

  // listado de proyectos recibido desde el componente padre
  proyectos = input.required<ProyectoInt[]>();
}
