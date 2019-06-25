import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SectionBoxComponent } from './section-box/section-box.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionBoxComponent
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
