import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  env = environment;

  // Model do formulário.
  form = {
    date: '',     // Data de envio do contato.
    name: '',
    email: '',
    subject: '',
    message: '',
    status: ''    // Situação do contato [received, readed, answered, deleted]
  }

  // Formulário ainda não foi enviado.
  sended = false;

  constructor() { }

  ngOnInit() {

    // Monitora usuário logado.
    onAuthStateChanged(this.auth, (userData) => {
      //|_-Para se o usuário estiver logado usar essa função para preencher os campos
      if (userData) {
        this.form.name = userData.displayName + ''; //"+ ''" para concatenar a variável
        this.form.email = userData.email + '';//usa para quando dá erro de variável
      }
    });

  }

  sendForm() { 

    //regex: Expressão regular (para validar o email)
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (
      this.form.name.length < 3 || //Verificar se o nome tem no mínimo 3 caracteres
      
    ){

    }
  }

  //bloquear código malicioso
  stripTags(htmlText: string) {
    let div = document.createElement('div');
    div.innerHTML = htmlText.trim().replace(/<script>.*<\/script>/, '');
    return div.textContent;
  }

}
