/*
 * @LastEditTime: 2022-08-27 08:40:59
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stchart-title',
  templateUrl: './stchart-title.component.html',
  styleUrls: ['./stchart-title.component.less']
})
export class STChartTitleComponent implements OnInit {

  constructor() { }

  @Input() title: string = ''
  ngOnInit(): void {
  }

}
