import { Component, Input } from '@angular/core';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ TableComponent, FormComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  @Input() formFields: any[];

  constructor() { 
    this.formFields = [];
  }
}
