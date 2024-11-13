import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  valueOne = 0;
  valueTwo = 0;
  result = 0;

  add(){
    this.result = Number(this.valueOne) + Number(this.valueTwo);
  }

  subtract(){
    this.result = Number(this.valueOne) - Number(this.valueTwo);
  }

  multiply(){
    this.result = Number(this.valueOne) * Number(this.valueTwo);
  }

  divide(){
    this.result = Number(this.valueOne) / Number(this.valueTwo);
  }

  power(){
    this.result = Number(this.valueOne) ** Number(this.valueTwo);
  }

}
