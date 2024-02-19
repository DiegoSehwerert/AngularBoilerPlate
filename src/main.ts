import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './app/inicio/inicio.component';
import { UsuariosComponent } from './app/usuarios/usuarios.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: InicioComponent, title: 'Inicio' },
        { path: 'usuarios', component: UsuariosComponent, title: 'Usuarios' }
      ])
    )
  ]
}).catch(err => console.error(err));