import { Cell } from "./Cell";

export interface Payment {
    payment: string;
    ammount: number;
    code: string;
    grid: Cell[];
}