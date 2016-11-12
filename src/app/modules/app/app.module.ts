import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from '../../components/app/app.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ModalComponent,
    CalendarComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
