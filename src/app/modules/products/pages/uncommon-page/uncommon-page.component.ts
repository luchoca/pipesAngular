import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //il8nSelect
  public name: string = 'Luciano';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente(): void {
    if (this.name === 'Luciano') {
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Luciano';
      this.gender = 'male';
    }
  }

  //iln8Plural

  public client: string[] = [
    'Maria',
    'Juan',
    'Pepe',
    'Joaquin',
    'Matias',
    'Nicolas',
  ];

  public clientMap = {
    '=0': 'no hay clientes en la fila',
    '=1': 'hay 1 cliente en la fila',
    '=2': 'hay 2 clientes en la fila',
    '=3': 'hay 3 clientes en la fila',
    '=4': 'hay 4 clientes en la fila',
    '=5': 'hay 5 clientes en la fila',
    '=6': 'hay 6 clientes en la fila',
  };
  atenderClient(): void {
    this.client.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Luciano',
    age: 31,
    address: 'Paysandu, Uruguay',
  };

  //AsyncPipe
  ////async observable
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );
  ////async promesa

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 4000);
  });
}
