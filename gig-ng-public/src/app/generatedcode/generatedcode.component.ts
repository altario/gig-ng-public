import { GeneratedValue } from './../model/GeneratedValue';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Cell } from '../model/Cell';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generatedcode',
  templateUrl: './generatedcode.component.html',
  styleUrls: ['./generatedcode.component.css']
})
export class GeneratedcodeComponent implements OnInit {

  listOfCells: Cell[] = [];
  @Output() generatedCodeOut = new EventEmitter<GeneratedValue>();

  generatedCode!: string;
  interval: any;
  constructor() { }

  ngOnInit(): void {
    this.generateGrid();
    this.fetchNumber();
    this.interval = setInterval(() => {
      this.listOfCells = [];
      this.generateGrid();
      this.fetchNumber();
    }, 2000);
  }

  generateGrid() {

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        let c = new Cell(i.toString() + j.toString())
        this.listOfCells.push(c);
      }
    }
  }

  fetchNumber() {
    let currentDate: Date = new Date();  
    let seconds = currentDate.getSeconds().toString();
    let firstChar = this.fetchCharValueBasedInSeconds(seconds);
    let secondChar = this.fetchCharValueBasedInSeconds(seconds.split('').reverse().join(''));
    this.generatedCode = this.countOccurrences(firstChar).toString() + this.countOccurrences(secondChar).toString();
    this.generatedCodeOut.emit(new GeneratedValue(this.generatedCode, this.listOfCells));
  }


  private fetchCharValueBasedInSeconds(seconds: string) {
    for (var i of this.listOfCells) {
      if (i.position == seconds) 
        return i.value;
    }
    return '';
  }

  private countOccurrences(character: string) {
    let count = 0;
    for (var i of this.listOfCells) {
      if (i.value == character) 
        count++;
    }
    if(count > 9)
      count = this.divideByLowestInteger(count);
    return count;
  }

  private divideByLowestInteger(count: number){
    for(var i = 1; i < 10; i++){
      if((count / i) <= 9)
        return Math.round(count / i);
    }
    return 9;
  }

}
