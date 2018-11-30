import { Component } from '@angular/core';
import { TreeData } from './tree/tree-data';
import { AService } from './a.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeData: TreeData[];
  constructor(aservice: AService) {
    this.treeData = aservice.getTreeData1();
  }
}
