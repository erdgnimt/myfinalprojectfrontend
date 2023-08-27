import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, kdvOrani:number): number {
    return value+(value*kdvOrani/100);
  }

}
