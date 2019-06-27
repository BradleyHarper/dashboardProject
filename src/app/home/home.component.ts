import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";
import { v4 as uuid } from "uuid";


class DashboardSection {
  id: uuid = uuid();
  title: string = "";
  subtitle: string;
  rows: DashboardRow[] = [];
  constructor(title?: string) {
    if (title) {
      this.title = title;
    }
  }
}

class DashboardRow {
  id: uuid = uuid();
  title: string = "";
  subtitle: string;
  rows: DashboardCard[] = [];
  constructor(title?: string) {
    if (title) {
      this.title = title;
    }
  }
}

class DashboardCard {
  id: uuid = uuid();
  title: string = "";
  subtitle?: string;
  constructor(title?: string) {
    if (title) {
      this.title = title;
    }
  }
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  availableCards = [
    new DashboardSection("section"),
    new DashboardRow("row"),
    new DashboardCard("card")
  ];

  sections = [];
  rows = [];
  cards = [];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
console.log('event = ', event)
console.log('event.previousContainer.data[event.previousIndex] = ', event.previousContainer.data[event.previousIndex])


    const eventValue: any = event.previousContainer.data[event.previousIndex];
console.log('eventValue = ', eventValue)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const eventArr = [];
      if(eventValue instanceof DashboardSection) {
        const section = new DashboardSection();
        section.title = event.previousContainer.data[event.previousIndex];
        eventArr.push(section);
      }
      else if(eventValue instanceof DashboardRow) {
        // Check if dropping it in a section



        const row = new DashboardRow();
        row.title = event.previousContainer.data[event.previousIndex];
        eventArr.push(row);
      }


      // const card = new DashboardCard();

      // section.title = "testing123 -2";





      // console.log(`${eventArr}: event array after section gets pushed to it`);
      // test1.title = "testing123 -1"
console.log("")
console.log("")
      copyArrayItem(
        eventArr,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
