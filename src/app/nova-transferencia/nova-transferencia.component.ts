import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  value!: number;
  destination!: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    const valueEmit: Transferencia = {value: this.value, destination: this.destination};
    this.service.adicionar(valueEmit).subscribe((result) => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    });

  }

  limparCampos() {
    this.value = 0;
    this.destination = 0;
  }
}
