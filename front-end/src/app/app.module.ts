import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClasseComponent } from './features/classe/classe.component';
import { StudentComponent } from './features/student/student.component';
import { ClassService } from './shared/services/class/class.service';
import { StudentService } from './shared/services/student/student.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClasseComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClassService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
