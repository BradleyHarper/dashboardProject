import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sectionItem = ['section']
  rowItem = ['row']
  cardItem = ['cards'];

  section = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>){
    // var test = document.getElementsByClassName("cdk-drop-list-receiving");
    // if(test){
    //   document.getElementById("sectionCards").style.backgroundColor = "black";
    // }else{
    //   console.log("nope", event);
    // }
    // if(cards == "Row" || "Datacard"){
    //  return false;
    // }

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


