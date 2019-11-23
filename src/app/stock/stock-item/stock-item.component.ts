import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class StockItemComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  ngOnInit(): void {
    console.log('stock-item component - On Init');
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('stock-item component - On Changes');
  }
  ngOnDestroy(): void {
    console.log('stock-item component - On Destory');
  }
  ngDoCheck(): void {
    console.log('stock-item component - Do check');
  }
  ngAfterContentChecked(): void {
    console.log('stock-item component - After Content Checked');
  }
  ngAfterContentInit(): void {
    console.log('stock-item component - After Content Init');
  }
  ngAfterViewChecked(): void {
    console.log('stock-item component - After View Checked');
  }
  ngAfterViewInit(): void {
    console.log('stock-item component - After View Init');
  }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }
  
  changeStockPrice() {
    this.stock.price += 5;
  }
}
