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
  getHeroes(): Hero[] {
    return [
      { id: 11, isSecret: false, name: 'Mr. Nice' },
      { id: 12, isSecret: false, name: 'Narco' },
      { id: 13, isSecret: false, name: 'Bombasto' },
      { id: 14, isSecret: false, name: 'Celeritas' },
      { id: 15, isSecret: false, name: 'Magneta' },
      { id: 16, isSecret: false, name: 'RubberMan' },
      { id: 17, isSecret: false, name: 'Dynama' },
      { id: 18, isSecret: true, name: 'Dr IQ' },
      { id: 19, isSecret: true, name: 'Magma' },
      { id: 20, isSecret: true, name: 'Tornado' }
    ];
  }
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