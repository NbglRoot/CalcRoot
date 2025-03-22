import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-form',
  standalone: false,
  templateUrl: './calculator-form.component.html',
  styleUrl: './calculator-form.component.css'
})
export class CalculatorFormComponent {
// form inputs
  firstInputValue: number = 0;
  secondInputValue: number = 0;
// chosen operation
  selectedOperation: string = 'numAdd';
  generateOperationBtn(): string {
    switch (this.selectedOperation) {
      case 'numAdd':
        return 'Sumar';
        break;
      case 'numRest':
        return 'Restar';
        break;
      case 'numMulti':
        return 'Multiplicar';
        break;
      case 'numDivide':
        return 'Dividir';
        break;
    }
    return '';
  }

// calculation logic
resultCalculation: number | undefined;
calculateResult(): void {
  const firstOper = document.querySelector('#firstInputNum') as HTMLInputElement;
  const secondOper = document.querySelector('#secondInputNum') as HTMLInputElement;
    switch (this.selectedOperation) {
      case 'numAdd':
        this.resultCalculation = Number(firstOper.value) + Number(secondOper.value);
        break;
      case 'numRest':
        this.resultCalculation = Number(firstOper.value) - Number(secondOper.value);
        break;
      case 'numMulti':
        this.resultCalculation = Number(firstOper.value) * Number(secondOper.value);
        break;
      case 'numDivide':
        this.resultCalculation = Number(firstOper.value) / Number(secondOper.value);
        break;
    }  
  }

// btns logic from inputs belongin to the main form
  updateValue(inputType: 'first' | 'second', operation: 'increment' | 'decrement') {
    if (inputType === 'first') {
      this.firstInputValue += operation === 'increment' ? 1 : -1;
    } else {
      this.secondInputValue += operation === 'increment' ? 1 : -1;
    }
  }

// inputs num updater
  changeNumInputs(input: 'first' | 'second'): void {
    const firstOper = document.querySelector('#firstInputNum') as HTMLInputElement;
    const secondOper = document.querySelector('#secondInputNum') as HTMLInputElement;
    if(input === 'first') {
      this.firstInputValue = Number(firstOper.value);
    } else {
      this.secondInputValue = Number(secondOper.value);
    }
  }

// input num checker
hasChar: boolean = false;
checkInput(input: 'first' | 'second'): void {
  const inputVal = input === 'first' ? 
  (document.querySelector('#firstInputNum') as HTMLInputElement).value 
  : 
  (document.querySelector('#secondInputNum') as HTMLInputElement).value;

  const isValid = /^-?\d*\.?\d*$/.test(inputVal);
  if(!isValid) {
    this.hasChar = true;
  } else {
    this.hasChar = false;
  }
  }
}
