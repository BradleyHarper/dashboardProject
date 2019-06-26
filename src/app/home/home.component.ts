import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { v4 as uuid } from 'uuid';

class DashboardSection {
  id: uuid = uuid();
  title: string;
  rows: DashboardRow[];
  constructor(title?: string){
    if (title) {
      this.title = title;
    }
  }
}

class DashboardRow {
  id: uuid = uuid();
  title: string;
  rows: DashboardCard[];
  constructor(title?: string){
    if (title) {
      this.title = title;
    }
  }
}

class DashboardCard {
  id: uuid = uuid();
  title: string;
  subtitle: string;
  constructor(title?: string){
    if (title) {
      this.title = title;
    }
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  availableCards = [
    new DashboardSection('section'),
    new DashboardRow('row'),
    new DashboardCard('card')
  ];

  section = [];

  constructor() {}

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
      console.log("Move drop event", event);
    } else {
      // const section = new DashboardSection();
      // section.title = event.previousContainer.data[event.previousIndex];
      // console.log(section);
      // const eventArr = [];
      // eventArr.push(section);

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      console.log("transfer drop", event)
    }
  }
}


