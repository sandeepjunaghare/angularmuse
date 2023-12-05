import { Component, OnInit } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'app-lifecyleview',
  templateUrl: './lifecyleview.component.html',
  styleUrls: ['./lifecyleview.component.css'],
})
export class LifecyleviewComponent implements OnInit {
  constructor(private logger: Logger) {}

  ngOnInit(): void {
    this.logger.log('ngOnInit');
  }

  ngOnChanges(): void {
    this.logger.log('ngOnChanges');
  }

  ngDoCheck(): void {
    this.logger.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    this.logger.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.logger.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.logger.log('ngAgterViewInit');
  }

  ngAfterViewChecked(): void {
    this.logger.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.logger.log('ngOnDestroy');
  }
}
