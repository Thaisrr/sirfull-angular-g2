import { PanierComponent } from './pages/panier/panier.component';
import { SeriesComponent } from './pages/series/series.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateLogicComponent } from './pages/template-logic/template-logic.component';

const routes: Routes = [
  {path: 'syntaxe', component: TemplateSyntaxComponent},
  {path: 'logic', component: TemplateLogicComponent},
  {path:'com', component: CommunicationComponent},
  {path: 'panier', component: PanierComponent},
  {path: '404', component: NotFoundComponent},
  {path: 'series', component: SeriesComponent},
  {path: '', redirectTo: '/syntaxe', pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
