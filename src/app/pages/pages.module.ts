import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    CalculatorComponent,
    AboutComponent,
    NotFoundComponent,
  ]
})
export class PagesModule { }
