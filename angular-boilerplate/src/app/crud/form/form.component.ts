import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  languages = ['ES', 'EN']; // Aquí se define el array de idiomas
  selectedLanguage = 0; // Aquí se define el idioma seleccionado por defecto (el primer idioma en el array)

  form = new FormGroup({
    languageES: new FormControl(''),
    descriptionES: new FormControl(''),
    languageEN: new FormControl(''),
    descriptionEN: new FormControl('')
  });

  selectLanguage(index: number) {
    this.selectedLanguage = index; // Cambia el idioma seleccionado al que el usuario ha hecho clic
  }
}
