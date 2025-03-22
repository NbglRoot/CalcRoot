import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { FormsModule } from "@angular/forms";
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutContentComponent } from './about-content/about-content.component';



@NgModule({
  declarations: [
    FooterComponent,
    CalculatorFormComponent,
    ErrorMessageComponent,
    AboutContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports: [
    FooterComponent,
    CalculatorFormComponent,
    ErrorMessageComponent,
    AboutContentComponent,
  ]
})
export class ComponentsModule { }
