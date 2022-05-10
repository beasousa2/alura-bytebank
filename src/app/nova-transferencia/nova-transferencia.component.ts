import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  value!: number;
  destination!: number;

  @Output() aoTransferir = new EventEmitter<any>();

  transferir() {
    console.log('Solicitada nova transferencia');
    const valueEmit = {value: this.value, destination: this.destination};
    this.aoTransferir.emit(valueEmit);
    this.limparCampos();
  }

  limparCampos() {
    this.value = 0;
    this.destination = 0;
  }
}
