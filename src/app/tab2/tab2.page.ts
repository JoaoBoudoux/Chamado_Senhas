import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(public senhasService: SenhasService) {}

  chamarProximaSenha() {
    // Verifica se há senhas na lista
    if (this.senhasService.senhasArray.ST.length > 0) {
      // Pega a primeira senha da lista
      const proximaSenha = this.senhasService.senhasArray.ST[0];
      // Remove a senha da lista de senhas
      this.senhasService.senhasArray.ST.shift();
      // Atualiza a senha no serviço ou em qualquer outro lugar necessário
      this.senhasService.senhasArray.ST = this.senhasService.senhasArray.ST; // Forçar atualização do array
      return proximaSenha;
    } else {
      // Se não houver senhas na lista, exiba uma mensagem ou tome a ação apropriada
      console.log('Não há mais senhas na fila.');
      return null;
    }
  }
}