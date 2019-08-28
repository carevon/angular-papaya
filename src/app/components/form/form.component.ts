import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
// Importando o Angular HttpClient
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  mainForm:FormGroup;
  generos:Array<Object> = [];
  cores:Array<Object> = [];

  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient // import HttpClient
    ) { 

    // array de generos
    this.generos = [
      {nome:"Masculino", valor:"m"},
      {nome:"Feminino", valor:"f"},
      {nome:"Outros", valor:"o"}
    ]
    //array de cores
    this.cores = [
      {nome:"Vermelho", hex:"#ff2f2f"},
      {nome:"Amarelo", hex:"#ffd400"},
      {nome:"Azul", hex:"#007eff"},
      {nome:"Rosa", hex:"#e400ff"},
      {nome:"Verde", hex:"#008246"}
    ]

    // adicionar os atributos ao formulário
    this.mainForm = formBuilder.group({
      nome:'',
      sobrenome:'',
      email:'',
      genero:'',
      corFavorita:'',
      cpf:'',
      pais:''
    })
  }

  ngOnInit() {
  }

}
