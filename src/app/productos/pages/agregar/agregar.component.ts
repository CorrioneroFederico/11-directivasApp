import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1:string = 'Mensaje enviado desde AgregarComponent';
  color:string = 'red';

  public miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]]
  });

  constructor(private fb:FormBuilder) { }

  isInvalid(field:string):boolean{
    return this.miFormulario.get(field)?.invalid || false;
  }

  changeName():void{
    this.texto1='Ezze';
  }

  changeColor():void{
    this.color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`
  }

}
