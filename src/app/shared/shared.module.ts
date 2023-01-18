import { AgregarComponent } from '../productos/pages/agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ErrorMsgDirective } from './directives/error-msg.directive';

@NgModule({
  declarations: [
    ErrorMsgDirective,
  ],
  exports:[
    ErrorMsgDirective,
  ]
})
export class SharedModule { }
