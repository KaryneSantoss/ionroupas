import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  // Bloqueia a view.
  view = false;

  // Model do documento.
  newDocument = {
    date: '',
    name: '',
    description: '',
    image: '/assets/generic.png',
    location: '',
    geolocation: '',
    owner: '',
    views: 0,
    status: 'on'
  }

  // Coordenadas do GPS.
  toggleGPS = true;

  // Botão [Salvar] desabilitado.]
  btnDisabled = true;

  constructor() { }

  ngOnInit() {

    this.view = true;
  }

  // Obtém a imagem do documento.
  // option = 'new'* | 'reset'
  getPhoto(option = 'new') { }

  // Valida o formulário quando um campo é editado.
  change() { }

  // Monitora situação do toggle do GPS.
  toggleChange() { }

  // Salva dados do documento no back-end.
  saveDocument() { }

}
