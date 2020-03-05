import { Component, OnInit } from '@angular/core';
// importar api de formulários
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    formUser:FormGroup;
    constructor(private formBuilder:FormBuilder) {
      // estrutura do formuário  de usuário com dados do tipo FormGroup
      this.formUser = this.formBuilder.group({
         _id: [{value:'123456', disabled:true}],
         nome: [{value:'Lucas', disabled:false}],
         email:[{value:'luk.campos@hotmail.com',disabled:false}],
         sobrenome:[{value:'campos', disabled:false}],
         telefone:[{value:'+5511959450900',disabled:false}]
      })

      console.log("this.formUser",this.formUser)
  }

  ngOnInit() {
  }


  public salvarUsuario(){
    alert(`Usuário ${this.formUser.value.nome} salvo com sucesso!` )
  }


}
