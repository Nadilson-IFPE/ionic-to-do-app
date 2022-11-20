import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Para testes com dados estáticos
  /* todoList = [
    {
      nomeItem: 'Programar',
      vencimentoItem: '11/25/2022',
      prioridadeItem: 'High',
      categoriaItem: 'Trabalho',
    },
    {
      nomeItem: 'Desenhar app',
      vencimentoItem: '11/28/2022',
      prioridadeItem: 'Low',
      categoriaItem: 'Trabalho',
    },
    {
      nomeItem: 'Comprar hardware',
      vencimentoItem: '11/30/2022',
      prioridadeItem: 'Middle',
      categoriaItem: 'Pessoal',
    },
    {
      nomeItem: 'Treinar',
      vencimentoItem: '12/01/2022',
      prioridadeItem: 'High',
      categoriaItem: 'Pessoal',
    },
  ]; */

  todoList = [];

  today: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async adicionarTarefa() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then((novoObjetoTarefa) => {
      console.log(novoObjetoTarefa.data);
      this.todoList.push(novoObjetoTarefa.data);
    });

    return await modal.present();
  }

  delete(index) {
    this.todoList.splice(index, 1);
  }
}
