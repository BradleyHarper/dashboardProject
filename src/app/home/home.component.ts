import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    'Section',
    'Row',
    'Datacard'
  ];

  row = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>){
    var test = document.getElementsByClassName("cdk-drop-list-receiving");
    if(test){
      document.getElementById("sectionCards").style.backgroundColor = "black";
    }else{
      console.log("nope", event);
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}


