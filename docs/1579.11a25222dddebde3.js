"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1579],{1579:(Z,l,e)=>{e.r(l),e.d(l,{LoginPageModule:()=>P});var u=e(6814),d=e(95),i=e(3718),c=e(5877),p=e(553),f=e(3182),r=e(2251),n=e(9468);function m(o,s){1&o&&n._UZ(0,"ion-progress-bar",6)}function h(o,s){if(1&o){const a=n.EpF();n.TgZ(0,"ion-content",7)(1,"p"),n._uU(2,"Logue-se para ter acesso ao conte\xfado e ferramentas restritas."),n.qZA(),n.TgZ(3,"p",2)(4,"ion-button",8),n.NdJ("click",function(){n.CHM(a);const g=n.oxw();return n.KtG(g.login())}),n._UZ(5,"ion-icon",9),n._uU(6," Logue-se com o Google "),n.qZA()(),n.TgZ(7,"p")(8,"em"),n._uU(9,"Se necess\xe1rio, desligue o bloqueador de popups para este aplicativo."),n.qZA()()()}2&o&&n.Q6J("fullscreen",!0)}const v=[{path:"",component:(()=>{var o;class s{constructor(){this.app=(0,f.ZF)(p.N.firebase),this.auth=(0,r.v0)(this.app),this.provider=new r.hJ,this.view=!1}ngOnInit(){(0,r.Aj)(this.auth,t=>{t?location.href="/":this.view=!0})}login(){"popup"==p.N.signInMethod?(0,r.rh)(this.auth,this.provider):(0,r.F6)(this.auth,this.provider)}logout(){this.auth.signOut(),location.href="/"}}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:9,vars:3,consts:[[3,"translucent"],["slot","start"],[1,"ion-text-center"],["ios","log-in-outline","md","log-in-sharp","slot","end",1,"ion-padding"],["type","indeterminate",4,"ngIf"],["class","ion-padding-start ion-padding-end",3,"fullscreen",4,"ngIf"],["type","indeterminate"],[1,"ion-padding-start","ion-padding-end",3,"fullscreen"],[3,"click"],["name","logo-google","slot","start"]],template:function(t,g){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title",2),n._uU(5,"Login / Entrar"),n.qZA(),n._UZ(6,"ion-icon",3),n.YNc(7,m,1,0,"ion-progress-bar",4),n.qZA()(),n.YNc(8,h,10,1,"ion-content",5)),2&t&&(n.Q6J("translucent",!0),n.xp6(7),n.Q6J("ngIf",!g.view),n.xp6(1),n.Q6J("ngIf",g.view))},dependencies:[u.O5,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.fG,i.X7,i.wd,i.sr]}),s})()}];let L=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(v),c.Bz]}),s})(),P=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,d.u5,i.Pc,L]}),s})()}}]);