import { animate } from '@angular/animations';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

   words = "hello world";





   
   words1 = "HELLLLO WORLD";




   todayDate = new Date();



   salary  =   12300.89;

  name="Kasa Sahithi";
  title="angular pipes example";
  today=new Date();
  price=999.5;
  marks=89.6789;





   longText: string = `Angular is a powerful front-end framework developed by Google.
  It allows developers to build dynamic and responsive web applications efficiently.
  Angular uses TypeScript and includes tools for routing, forms, and dependency injection.`;
}



