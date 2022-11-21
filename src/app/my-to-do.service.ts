import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class MyToDoService {
  constructor(private storage: Storage) {
    this.init();
  }

  adicionarTarefa(key, value) {
    this.storage.set(key, value);
  }

  deletarTarefa(key) {
    this.storage.remove(key);
  }

  atualizarTarefa(key, novoValor) {
    this.storage.set(key, novoValor);
    this.listarTodasAsTarefas();
  }

  listarTodasAsTarefas() {
    const tarefas: any = [];
    this.storage.forEach((key, value, index) => {
      tarefas.push({ key: value, value: key });
    });

    return tarefas;
  }

  async init() {
    await this.storage.create();
  }
}
