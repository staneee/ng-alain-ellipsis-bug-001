import { Component, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { STColumn, STPage, STComponent } from '@delon/abc';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent   implements AfterViewInit, OnDestroy {
  // private destroy$ = new Subject();
  // @ViewChild('st', { static: false }) st: STComponent;

  page: STPage = {
    front: false,
    show: false,
  };
  data: any[] = Array(2000)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        price: idx+"1000000000000000000000000000000000"
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 100 ,render: 'id',},
    { title: '价格1', index: 'price', width: 100,render: 'price', },
  ];

  scrollToIndex(index: number): void {
    // this.st.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  ngAfterViewInit(): void {
    // this.st.cdkVirtualScrollViewport.scrolledIndexChange.pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('scroll index to', data);
    // });
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }
}