import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription! : Subscription;
  constructor() { }
  

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(count => console.log(count)
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
