import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { TemplateLogicComponent } from './pages/template-logic/template-logic.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { SeriesComponent } from './pages/series/series.component';
import { ItemComponent } from './components/item/item.component';
import { GridComponent } from './components/grid/grid.component';
import { PanierComponent } from './pages/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TemplateSyntaxComponent,
    TemplateLogicComponent,
    NavigationComponent,
    NotFoundComponent,
    CommunicationComponent,
    EnfantComponent,
    SeriesComponent,
    ItemComponent,
    GridComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
