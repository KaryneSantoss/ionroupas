import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    //mudar o "titulo no navegador"
    title: environment.appName + ' - ' + environment.appSlogan,
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contacts',
    //mudar o "titulo no navegador"
    title: environment.appName + '- Faça contato',
    loadChildren: () => import('./page/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'about',
    //mudar o "titulo no navegador"
    title: environment.appName + '- Sobre',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'polices',
    //mudar o "titulo no navegador"
    title: environment.appName + '- Políticas de privacidade',
    loadChildren: () => import('./page/polices/polices.module').then( m => m.PolicesPageModule)
  },
  {
    path: 'login',
    title: environment.appName + '- Área de login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    title: environment.appName + '- Perfil do usuário',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./page/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./db/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'device',
    loadChildren: () => import('./teste/device/device.module').then( m => m.DevicePageModule)
  },
  {
    path: 'e404',
    //mudar o "titulo no navegador"
    title: environment.appName + '- Erro 404',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
