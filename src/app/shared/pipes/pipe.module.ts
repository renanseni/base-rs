import { NgModule } from '@angular/core';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { CommonModule } from '@angular/common';
import { StatusFormatPipe } from './status-format.pipe';
import { RemoveExtensionPipe } from './remove-extension.pipe';
import { CnpjFormatPipe } from './cnpj-format.pipe';
import { CpfCnpjFormatPipe } from './cpf-cnpj-format.pipe';
import { CpfFormatPipe } from './cpf-format.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RemoveExtensionPipe,
    CnpjFormatPipe,
    CpfCnpjFormatPipe,
    CpfFormatPipe,
    CurrencyFormatPipe,
    StatusFormatPipe
  ],
  exports: [
    RemoveExtensionPipe,
    CnpjFormatPipe,
    CpfCnpjFormatPipe,
    CpfFormatPipe,
    CurrencyFormatPipe,
    StatusFormatPipe
  ]
})
export class PipeModule { }
