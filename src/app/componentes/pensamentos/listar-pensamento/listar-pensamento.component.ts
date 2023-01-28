import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [{
    conteudo: 'I hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate javaI hate java',
    autoria: 'dev',
    modelo: 'modelo2'
  },{
    conteudo: 'I hate php',
    autoria: 'dev',
    modelo: 'modelo3'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
