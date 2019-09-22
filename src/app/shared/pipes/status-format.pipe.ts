import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusFormatPipe',
})
export class StatusFormatPipe implements PipeTransform {

    transform(item: boolean): any {
        if (typeof (item) === 'boolean') return item === true ? 'Sim' : 'Não';

        return item;
    }
}
