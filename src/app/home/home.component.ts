import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sectionItem = ['section'];
  rowItem = ['row'];
  cardItem = ['cards'];

  section = [];
  row = [];
  card = [];

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
      console.log("back where it started or moved spots in curent array", event);

    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log("the item moved to the other list", event)
    }
  }
}


