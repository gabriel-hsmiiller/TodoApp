import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Column } from 'src/app/models/column';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public columns: Column[] = [
    { id: 0, title: 'TO DO', cards: [
      {id: 0, title: 'TEST TO DO', description: 'A simple test'},
      {id: 1, title: 'TEST TO DO 2', description: 'A simple test2'},
    ] },
    { id: 1, title: 'IN PROGRESS', cards: [
      {id: 0, title: 'TEST IN PROGRESS', description: 'A simple test'},
      {id: 1, title: 'TEST IN PROGRESS 2', description: 'A simple test2'},
    ] },
    { id: 2, title: 'REVISION', cards: [] },
    { id: 3, title: 'DONE', cards: [] },
  ];

  public drop(event: CdkDragDrop<Card[]>): void {
    console.log(event.container)
    console.log(event.previousContainer)
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  public getColumnsId(): Array<string> {
    return this.columns.map(c => c.id.toString());
  }

  public addCard(id: number){
    let column = this.columns.find(c => c.id === id);
    column.cards.push(null);
  }
}
