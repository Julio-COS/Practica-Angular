import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  mostrarAlert:boolean=false;
  mostrarConsola(name:string){
    this.mostrarAlert=true;
    console.log("hola "+name);
  }

  persona = {
    nombre:'',
    edad:''
  }
  procesar(){
    console.log(this.persona)
  }
}
