import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';
import { CardComponent } from './card/card.component';
import { CardButtonCancelComponent } from './card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [
    CommonModule
  ],
  //Configuração para os componentes deste módulo poderem ser utilizados por outros módulos, neste caso no app-module(modulo principal)
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ]
})
export class CardsModule { }
