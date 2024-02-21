import { Component } from '@angular/core';
import { CrudComponent } from '../crud/crud.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
