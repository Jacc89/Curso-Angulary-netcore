import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-targeta-credito',
  templateUrl: './targeta-credito.component.html',
  styleUrls: ['./targeta-credito.component.css']
})
export class TargetaCreditoComponent implements OnInit {

  listaTargetas: any = [
    { titular: "luis castro", numeroTargeta: 34567890, fechaEspiracion:"11/23", cvv:123},
    { titular: "mery castro", numeroTargeta: 309876543, fechaEspiracion:"11/24", cvv:321},
  ];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService )
    {
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTargeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
        fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
        cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      })
    }

  ngOnInit(): void { }

  agregarTargeta(){
    console.log(this.form);

    const nuevo: any ={
      titular: this.form.get('t_]itular')?.value,
      numeroTargeta: this.form.get('numeroTargeta')?.value,
      fechaExpedicion: this.form.get('fechaExpedicion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listaTargetas.push(nuevo);
    this.toastr.success('La targeta fue reguistrada con exito.', 'Targeta Reguistrada');
    this.form.reset();
    console.log(nuevo);

  }

  eliminarTargeta(index: number){
    console.log(index);

    this.listaTargetas.splice(index, 1);
    this.toastr.error('La targeta fue eliminada con exito!', 'Targeta eliminada');


  }

}
