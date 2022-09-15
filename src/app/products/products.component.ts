import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
private mySubscription !: Subscription;
  constructor() { }
  ngOnInit(): void {
    console.log(interval(1000));// it returns Observable
    this.mySubscription = interval(1000)
                            .subscribe(count => console.log(count))
  }
}
