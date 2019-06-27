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
  subtitle: string;
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
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const section = new DashboardSection();
      const row = new DashboardRow();
      const card = new DashboardCard();
      const eventArr = [];
      section.title = "testing123 -2"
      section.rows.push(section)
      console.log(`${row.rows}: row.rows`);
      console.log(`${eventArr}: event array`);
      console.log(`${section.title}: section.title`);
      section.title = event.previousContainer.data[event.previousIndex];
      section.rows.push(section.title)
      eventArr.push(section);
      console.log(`${section.rows}: section.rows`)
      console.log(`${eventArr}: event array after section gets pushed to it`);
      console.log(`${DashboardCard.title}`)
      // test1.title = "testing123 -1"
      // const test2 = new DashboardCard();


      copyArrayItem(
        eventArr,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
