import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {

  public nameLower: string = 'diego';
  public nameUpper: string = 'DIEGO';
  public fullName: string = 'dIegO aRManDo';

  public customDate: Date = new Date();

}
