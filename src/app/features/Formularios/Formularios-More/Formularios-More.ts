import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormUtils } from '../../../Utils/FormUtils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios-more',
  standalone: true, // recomendable si usas imports en el componente
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './Formularios-More.html',
  styleUrls: ['./Formularios-More.css'], // corregido de styleUrl a styleUrls
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosMore {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) {
      console.warn('Formulario inválido');
      return;
    }

    console.log('Datos enviados:', this.myForm.value);
    alert('Formulario válido. Datos registrados correctamente.');
  }
}
