import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categorias = ['trabalho', 'pessoal', 'lar'];

  nomeTarefa;
  dataTarefa;
  prioridadeTarefa;
  categoriaTarefa;
  objetoTarefa;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss(this.objetoTarefa);
  }

  categoriaSelecionada(index) {
    this.categoriaTarefa = this.categorias[index];
  }

  adicionarTarefa() {
    this.objetoTarefa = {
      nomeItem: this.nomeTarefa,
      vencimentoItem: this.dataTarefa,
      prioridadeItem: this.prioridadeTarefa,
      categoriaItem: this.categoriaTarefa,
    };
    this.dismiss();
  }
}
