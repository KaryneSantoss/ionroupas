import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
// Importa o Core do Firebase.
import { initializeApp } from 'firebase/app';

// Importe apenas os componentes que forem necessários.
import { 
	getAuth,            // Sempre → Inicializa auth
	onAuthStateChanged, // Sempre → Monitora status da auth
	User		    // Profile → Model do usuário.
} from 'firebase/auth';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

//menu principal
export class AppComponent {
  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  //chama dados das variáveis(Fazer importação)
  env = environment;

  //Dados do usuário na view, quando não logado
  // Dados do usuário na view, quando não logado.
  appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'chatbubble-ellipses' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Privacidade', url: 'polices', icon: 'lock-closed' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Profile', url: 'profile', icon: 'person' },
  ];
  
  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {
        // Dados do usuário na view, quando logado.
        this.appUser = {
          logged: true,
          title: userData.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: userData.photoURL + ''
        }
      }
    });
  }
}
