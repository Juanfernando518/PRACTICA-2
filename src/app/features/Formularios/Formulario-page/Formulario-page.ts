import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common'; 
import { FormUtils } from '../../../Utils/FormUtils';

@Component({
  selector: 'app-formulario-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './formulario-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
  
  formUtils = FormUtils; 


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario:', this.myForm.value);
    alert('Formulario válido. Datos enviados correctamente.');
    this.myForm.reset();
  }

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });
}