import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormArray, FormControl } from "@angular/forms";
import { FormUtils } from '../../../Utils/FormUtils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios-dinamicos',
  standalone: true,  
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './Formularios-dinamicos.html',
  styleUrls: ['./Formularios-dinamicos.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  newLenguaje: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ])
  });

  // GETTER del FormArray
  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  // ⭐ AGREGAR UN LENGUAJE
  onAddToLenguajes() {
    if (this.newLenguaje.invalid) {
      this.newLenguaje.markAsTouched();
      return;
    }

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, [
        Validators.required,
        Validators.minLength(3)
      ])
    );

    this.newLenguaje.reset();
  }

  // ⭐ ELIMINAR UN LENGUAJE
  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }

  // ⭐ ENVIAR FORMULARIO
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log("Formulario enviado:", this.myForm.value);
  }
}
