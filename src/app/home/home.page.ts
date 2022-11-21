import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateTaskPage } from '../update-task/update-task.page';
import { AddNewTaskPage } from './../add-new-task/add-new-task.page';
import { MyToDoService } from './../my-to-do.service';

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

  constructor(
    public modalCtrl: ModalController,
    public myToDoService: MyToDoService
  ) {
    this.listarTodasAsTarefas();
  }

  async adicionarTarefa() {
    const modal = await this.modalCtrl.create({
      component: AddNewTaskPage,
    });

    modal.onDidDismiss().then((novaTarefa) => {
      // console.log(novoObjetoTarefa.data);
      // this.todoList.push(novoObjetoTarefa.data);
      this.listarTodasAsTarefas();
    });

    return await modal.present();
  }

  delete(key) {
    // this.todoList.splice(index, 1);
    //console.log(key);
    this.myToDoService.deletarTarefa(key);
    this.listarTodasAsTarefas();
  }

  listarTodasAsTarefas() {
    this.todoList = this.myToDoService.listarTodasAsTarefas();
    // console.log(this.myToDoService.listarTodasAsTarefas());
  }

  async atualizar(tarefaSelecionada) {
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: {
        tarefa: tarefaSelecionada,
      },
    });

    //  console.log(tarefaSelecionada);

    modal.onDidDismiss().then(() => {
      this.listarTodasAsTarefas();
    });

    return await modal.present();
  }
}
