import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyToDoService } from './../my-to-do.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categorias = [];
  atualCategoriaSelecionada;

  nomeTarefa;
  dataTarefa;
  prioridadeTarefa;
  categoriaTarefa;

  novoObjetoTarefa = {};

  constructor(
    public modalCtrl: ModalController,
    public myToDoService: MyToDoService
  ) {}

  ngOnInit() {
    this.categorias.push('trabalho');
    this.categorias.push('pessoal');
  }

  async dismiss() {
    await this.modalCtrl.dismiss(this.novoObjetoTarefa);
  }

  selecionarCategoria(index) {
    this.atualCategoriaSelecionada = this.categorias[index];
  }

  async adicionarTarefa() {
    this.novoObjetoTarefa = {
      nomeItem: this.nomeTarefa,
      vencimentoItem: this.dataTarefa,
      prioridadeItem: this.prioridadeTarefa,
      categoriaItem: this.atualCategoriaSelecionada,
    };

    const uid = this.nomeTarefa + this.dataTarefa;

    if (uid) {
      await this.myToDoService.adicionarTarefa(uid, this.novoObjetoTarefa);
    } else {
      console.log('Não é possível salvar tarefas em branco!');
    }

    this.dismiss();
  }
}
