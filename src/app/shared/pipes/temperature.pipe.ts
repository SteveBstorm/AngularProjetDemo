import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, unite : string): number {
    if(unite == "c") return (value-32) * 5/9;
    if(unite == "f") return (value * 9/5) + 32;
    return value;
  }

}
