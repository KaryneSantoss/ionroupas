import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'chatbubble-ellipses' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Privacidade', url: 'polices', icon: 'lock-closed' },
  ];
  
  constructor() {}
}
