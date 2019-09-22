import { Pipe, PipeTransform } from '@angular/core';
import { CnpjFormatPipe } from './cnpj-format.pipe';
import { CpfFormatPipe } from './cpf-format.pipe';


@Pipe({
  name: 'cpfCnpjFormat'
})
export class CpfCnpjFormatPipe implements PipeTransform {

  cnpj: CnpjFormatPipe = new CnpjFormatPipe();
  cpf: CpfFormatPipe = new CpfFormatPipe();

  transform(value: any, args?: any): any {
    if (value) {
      let tamanho = value.replace(/\D+/g, '').length;
      if (tamanho <= 11)
        return this.cpf.transform(value);
      else
        return this.cnpj.transform(value);
    }
    else return value;
  }

}
