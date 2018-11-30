import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatTreeModule,
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs/observable/of';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { AService } from './a.service';

library.add(fas);

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
  ]
})
export class MaterialModule { }

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MaterialModule
  ],
  declarations: [AppComponent, TreeComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
