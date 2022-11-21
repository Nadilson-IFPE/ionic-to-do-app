import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyToDoService } from '../my-to-do.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() tarefa;

  categorias = [];
  atualCategoriaSelecionada;

  nomeTarefa;
  dataTarefa;
  prioridadeTarefa;
  categoriaTarefa;

  novoObjetoTarefa = {};

  constructor(
    public modalCtlr: ModalController,
    public myToDoService: MyToDoService
  ) {}

  ngOnInit() {
    this.categorias.push('trabalho');
    this.categorias.push('pessoal');

    this.nomeTarefa = this.tarefa.value.nomeItem;
    this.dataTarefa = this.tarefa.value.vencimentoItem;
    this.prioridadeTarefa = this.tarefa.value.prioridadeItem;
    this.atualCategoriaSelecionada = this.tarefa.value.categoriaItem;
    //  console.log(this.tarefa);
  }

  async atualizar() {
    this.novoObjetoTarefa = {
      nomeItem: this.nomeTarefa,
      vencimentoItem: this.dataTarefa,
      prioridadeItem: this.prioridadeTarefa,
      categoriaItem: this.atualCategoriaSelecionada,
    };
    const uid = this.tarefa.key;

    if (uid) {
      await this.myToDoService.atualizarTarefa(uid, this.novoObjetoTarefa);
    } else {
      console.log('Não é possível salvar tarefas em branco!');
    }

    this.dismiss();
  }

  selecionarCategoria(index) {
    this.atualCategoriaSelecionada = this.categorias[index];
    //  console.log(this.atualCategoriaSelecionada);
  }

  async dismiss() {
    await this.modalCtlr.dismiss();
  }
}
