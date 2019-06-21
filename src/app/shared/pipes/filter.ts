import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'rangeFilter',
    pure: false
})
export class RangeFilterPipe implements PipeTransform {
    transform(items, rating): any {
        if (!items || !rating) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.vote_average >= rating);
    }
}