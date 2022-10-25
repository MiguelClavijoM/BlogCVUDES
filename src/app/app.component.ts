import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Investigadores', url: '/folder/Investigadores', icon: 'person' },
    { title: 'Directores de TG', url: '/folder/Directores de Trabajo de Grado', icon: 'folder' },
    { title: 'Graduados', url: '/folder/Graduados', icon: 'man' },
    { title: 'Publicaciones', url: '/folder/Publicaciones', icon: 'archive' },
    { title: 'Contacto', url: '/folder/Contacto', icon: 'mail' },
  ];
  public labels = ['Recursos'];
  constructor() {}
}
