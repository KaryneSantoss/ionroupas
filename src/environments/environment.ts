export const environment = {
  production: false,
  appName: "Ionic Test",
  appSlogan: "O melhor site do mundo!",

  //Tipo de login (Redirect e pop up)
  signInMethod: "redirect",

  // Coleção de contatos do Firestore.
  contactCollection: 'contacts',

  // Coleção principal do Firebase.
  dbCollection: 'things',

  // Imagem padrão dos documentos.
  dbDefaultImage: 'assets/generic.png',

  // Formatos de imagens permitidos.
  dbImageFormats: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'tiff', 'tif'],

  firebase: {
    apiKey: "AIzaSyBA-LF80JE6Lx4GL7pIhfpHd8w-W2MYqgA",
    authDomain: "ionroupas.firebaseapp.com",
    projectId: "ionroupas",
    storageBucket: "ionroupas.appspot.com",
    messagingSenderId: "8634848655",
    appId: "1:8634848655:web:3eee2e3994d8b5c49fa7fa",
    measurementId: "G-5XKHLYS8HM"
  }
};