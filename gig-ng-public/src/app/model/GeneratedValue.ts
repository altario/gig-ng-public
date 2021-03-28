import { Cell } from "./Cell";

export class GeneratedValue {
    value: string;
    generatedList: Cell[]; 

    constructor(value: string, generatedList: Cell[]){
        this.value = value;
        this.generatedList = generatedList;
    }

}