import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };
  constructor() {}

  criarPensamento() {
    alert('criar pensamento');
  }

  ngOnInit(): void {}
}