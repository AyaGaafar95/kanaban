import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],

})
export class MainViewComponent implements OnInit{
  constructor(){}
  board:Board = new Board('test Board',[
    new Column ('Ideas',[
      'some rondom idea',
      'Aya is good in every thing that she do',
      'this is another rondom idea',
      'build an awesome application'
    ]),
    new Column('Research',[

      'foo',
      "this was in the 'Reaserch' column",
      ' how to be very good in front End'
    ]),
    new Column('Todo',[
      'Get to work',
      'pick up groceries',
      'Go home',
      "fall asleep",
    ]),
    new Column('Done',[
      'Get up', 'Brush teeth',
       'Take a shower',
       'Check e-mail',
       'Walk dog']

  )
  ])
  ngOnInit(): void {

  }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  }


