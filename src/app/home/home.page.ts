import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [
    {
      itemName: 'Programar',
      itemDueDate: '11/25/2022',
      itemPriority: 'High',
      itemCategory: 'Work',
    },
    {
      itemName: 'Desenhar app',
      itemDueDate: '11/28/2022',
      itemPriority: 'Low',
      itemCategory: 'Work',
    },
    {
      itemName: 'Comprar hardware',
      itemDueDate: '11/30/2022',
      itemPriority: 'Middle',
      itemCategory: 'Personal',
    },
    {
      itemName: 'Treinar',
      itemDueDate: '12/01/2022',
      itemPriority: 'High',
      itemCategory: 'Personal',
    },
  ];

  today: number = Date.now();

  constructor() {}
}
