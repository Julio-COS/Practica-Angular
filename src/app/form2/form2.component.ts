import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {

  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }


  formUser = new FormGroup({
    'nombre': new FormControl('',Validators.required);
    'email': new FormControl('',[Validators.required, Validators.email]);
  });
  /*   nombre = new FormControl('',Validators.required);
  email = new FormControl('',[Validators.required, Validators.email]);
   */
}
