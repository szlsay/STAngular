/*
 * @LastEditTime: 2022-08-26 23:37:32
 */
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-stchart',
  templateUrl: './stchart.component.html',
  styleUrls: ['./stchart.component.less']
})
export class STChartComponent implements OnInit {

  constructor() { }
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          4900, 4000, 4200, 6100, 4500, 5100, 3000, 2500, 3400, 4400, 4000,
          4700,
        ],
        type: 'line',
        lineStyle: {
          color: '#9f97e8',
          width: 2,
          type: 'solid',
        },
        areaStyle: {
          color: '#9f97e888',
        },
      },
      {
        data: [
          2000, 2500, 3800, 2600, 2800, 5100, 3500, 3000, 3300, 4400, 3200,
          5700,
        ],
        type: 'line',
        lineStyle: {
          color: '#468afe',
          width: 2,
          type: 'solid',
        },
        areaStyle: {
          color: '#468afe88',
        },
      },
    ],
  };
  ngOnInit(): void {
  }

}
