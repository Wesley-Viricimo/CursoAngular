import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardRoxoButtonComponent } from './card-roxo-button/card-roxo-button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  //Configuração para os componentes deste módulo poderem ser utilizados por outros módulos, neste caso no app-module(modulo principal)
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ]
})
export class CardsModule { }
