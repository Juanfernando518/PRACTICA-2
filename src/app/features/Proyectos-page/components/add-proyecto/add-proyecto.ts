import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { ProyectoInt } from '../../interfaces/Proyecto-int';
import { ProyectosService } from '../../../Proyectos-dos/services/proyectos-service';

@Component({
  selector: 'add-proyecto',
  standalone: true,
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  // Inyectamos el servicio
  private proyectosService = inject(ProyectosService);

  name = signal('');
  description = signal('');
  newProyecto = output<ProyectoInt>();

  // ✅ Agregar proyecto
  addProyecto() {
    const newProyecto: ProyectoInt = {
      id: Math.floor(Math.random() * 1000),
      nombre: this.name(),
      descripcion: this.description(),
    };

    this.newProyecto.emit(newProyecto); 
    this.name.set('');
    this.description.set('');
  }

  deleteProyecto() {
    this.proyectosService.deleteFirstProyecto();
  }

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }
}
