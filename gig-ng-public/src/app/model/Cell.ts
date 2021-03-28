export class Cell {

    allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    position: string;
    value: string;

    constructor(position: string){
        this.position = position;
        this.value = this.getRandomValue();
    }

    private getRandomValue(): string {
        return this.allowedChars.charAt(Math.floor(Math.random() * this.allowedChars.length));
    }

}