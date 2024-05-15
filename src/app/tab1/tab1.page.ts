import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  proximaSenha: string = ''; // Inicializa a propriedade proximaSenha

  constructor(public senhasService: SenhasService) {
  }

}