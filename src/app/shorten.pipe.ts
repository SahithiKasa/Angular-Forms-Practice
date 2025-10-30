import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string,limit:number=20,suffix:string= "..."):string{
    if(!value) return "";
    if(value.length>limit){
      return value.slice(0,limit)+suffix;
    }
        return value;
  }

}
