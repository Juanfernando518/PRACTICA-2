import { effect, Injectable, signal } from '@angular/core';
import { ProyectoInt } from '../../Proyectos-page/interfaces/Proyecto-int';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private readonly StorageKey = 'proyectosApp';

  // ✅ Inicializa los proyectos desde localStorage
  proyectos = signal<ProyectoInt[]>(this.loadProyectos());

  constructor() { 
    // ✅ Cada vez que cambia la señal "proyectos", se guarda en localStorage
    effect(() => {
      const data = this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.StorageKey, JSON.stringify(data));
    });
  }

  // ✅ Carga los proyectos desde localStorage o crea uno por defecto
  private loadProyectos(): ProyectoInt[] {
    const data = localStorage.getItem(this.StorageKey);
    return data ? JSON.parse(data) : [{
      id: 1,
      nombre: 'Proyecto A',
      descripcion: 'Descripción inicial'
    }];
  }

  // ✅ Agregar un nuevo proyecto
  addProyecto(nuevoProyecto: ProyectoInt) {
    this.proyectos.set([...this.proyectos(), nuevoProyecto]);
  }

  
  deleteFirstProyecto() {
    const proyectosActuales = this.proyectos();
    if (proyectosActuales.length > 0) {
      const nuevos = proyectosActuales.slice(1); 
      this.proyectos.set(nuevos);
    }
  }
}
