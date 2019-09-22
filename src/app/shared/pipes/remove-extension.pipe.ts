import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return null;

    let array = value.split('.');

    if(!array) return value;

    array.pop();

    return array.join("");
  }

}
