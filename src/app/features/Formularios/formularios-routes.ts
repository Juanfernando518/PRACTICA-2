import { FormularioPage } from "./Formulario-page/Formulario-page";
import { Routes } from "@angular/router";
import { FormulariosDinamicos } from "./Formularios-dinamicos/Formularios-dinamicos";
import { FormulariosMore } from "./Formularios-More/Formularios-More";

export const formulariosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Formularios Básicos',
        component: FormularioPage,
      },
      {
        path: 'dynamic',
        title: 'Formularios Dinámicos',
        component: FormulariosDinamicos,
      },
      {
        path: 'more',
        title: 'More',
        component: FormulariosMore,
      },
      {
        path: '**',
        redirectTo: 'basic',
      }
    ]
  }
];
