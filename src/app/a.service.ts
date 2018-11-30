import { Injectable } from '@angular/core';
import { TreeData } from './tree/tree-data';

export class Hero {
  id: number;
  name: string;
  isSecret = false;
}

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class AService {
  getTreeData1(): TreeData[] {
    return [
      {
        name: 'a',
        iconname: 'commute',
        children: [
          { name: 'g', iconname: 'book', },
          {
            name: 'b',
            iconname: 'flight-takeoff',
            children: [
              { name: 'e', iconname: 'book-open' },
              { name: 'f', iconname: 'book-reader' }
            ]
          },
          {
            name: 'c',
            iconname: 'motorcycle',
            children: [
              { name: 'd', iconname: 'book' }
            ]
          }
        ]
      },
    ];
  }
}