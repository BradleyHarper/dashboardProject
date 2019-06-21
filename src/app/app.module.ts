import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SectionBoxComponent } from './section-box/section-box.component';
import { RowComponent } from './row/row.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionBoxComponent,
    RowComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  entryComponents: [AppComponent],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
