import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cell } from '../model/Cell';
import { GeneratedValue } from '../model/GeneratedValue';
import { Payment } from '../model/Payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  //@Input() listOfCells!: Cell[];
  listOfCells!: Cell[];
  code!: string;
  paymentForm = new FormGroup({
    payment: new FormControl(''),
    ammount: new FormControl(''),
    code: new FormControl(''),
    grid: new FormControl(''),
  });

  dataSource: Payment[] = [];
  displayedColumns: string[] = ['payment', 'ammount', 'code', 'grid'];


  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  fetchGeneratedObject(input: GeneratedValue ){
    this.listOfCells = input.generatedList;
    this.code = input.value;
  }

  onSubmit(){
    this.paymentForm.patchValue({
      code: this.code,
      grid: this.listOfCells
    });

    

    this.dataSource.push(this.paymentForm.value as Payment);
    this.changeDetectorRefs.detectChanges();

    console.log(this.dataSource);

  }

}
