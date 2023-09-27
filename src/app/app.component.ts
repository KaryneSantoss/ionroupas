import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

//menu principal
export class AppComponent {

  //chama dados das variáveis(Fazer importação)
  env = environment;

  //módulo de autentucação
  private auth: Auth = inject(Auth);

  //situação do usuário
  authState$ = authState(this.auth);

  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'chatbubble-ellipses' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Privacidade', url: 'polices', icon: 'lock-closed' },
  ];
  
  constructor() {  }
}
