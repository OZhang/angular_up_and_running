import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
 DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  title = 'Stock Market App';

  public stock: Stock;
  private counter: number = 1;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('App component - On Init');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('App component - On Changes');
  }
  ngOnDestroy(): void {
    console.log('App component - On Destory');
  }
  ngDoCheck(): void {
    console.log('App component - Do check');
  }
  ngAfterContentChecked(): void {
    console.log('App component - After Content Checked');
  }
  ngAfterContentInit(): void {
    console.log('App component - After Content Init');
  }
  ngAfterViewChecked(): void {
    console.log('App component - After View Checked');
  }
  ngAfterViewInit(): void {
    console.log('App component - After View Init');
  }

  onToggleFavorite(stock: Stock){
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    this.stock = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80)
  }

  changeStockPrice() {
    this.stock.price += 10;
  }

  testMethod() {
    console.log('Test method in App')
  }
}
