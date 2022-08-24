import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gotTrues'
})
export class GotTruesPipe implements PipeTransform {

  transform(fields: Field) {
    const asArray = Object.entries(fields)
    const onlyTrues = asArray.filter(([key, value]) => value === true)
    return Object.fromEntries(onlyTrues)
  }
}

