import { Cell } from './../model/Cell';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneratedValue } from '../model/GeneratedValue';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  interval: any;
  listOfCells: Cell[] = [];
  generatedCode!: string;
  generatedCodeValue!: GeneratedValue;

  startGrid = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.listOfCells = [];
    clearInterval(this.interval);
  }

  fetchGeneratedObject(input: GeneratedValue ){
    this.listOfCells = input.generatedList;
  }

  generateGrid(){
    this.startGrid = true;
  }

  validate(character: any) {
    console.log(character);
  }


}
