import { Component, Input } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { of } from 'rxjs/observable/of';
import { TreeData } from './tree-data'

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input() nestedDataSource: TreeData[];
  getChildren = (node: TreeData) => of(node.children);
  nestedTreeControl = new NestedTreeControl(this.getChildren);
  hasChild(_: number, node: TreeData) {
    console.log(node);
    return node.children != null && node.children.length > 0;
  }
}
