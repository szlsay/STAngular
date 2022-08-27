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
  chartOptionPic1: EChartsOption = {
    series: [{
      type: 'pie',
      radius: [30, 60],
      top: '0%',
      height: 200,
      left: 'center',
      width: 250,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      label: {
        alignTo: 'edge',
        formatter: '{name|{b}}\n{time|{c}}',
        minMargin: 5,
        edgeDistance: 10,
        lineHeight: 15,
        rich: {
          time: {
            fontSize: 10,
          }
        }
      },
      labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 80
      },
      data: [
        { name: '类型一', value: 500000 },
        { name: '类型二', value: 500000 },
        { name: '类型三', value: 500000 },
        { name: '类型四', value: 900000 }
      ]
    }]
  };
  chartOptionPic2: EChartsOption = {
    title: {
      text: '出库进度',
      textStyle: {
        color: "#999999",
        fontSize: 14,
      },
      subtext: "65%",
      subtextStyle: {
        fontSize: 28,
        color: "#3d87fe",
        fontWeight: 900
      },
      itemGap: 10,
      left: "center",
      top: "18%",
    },
    angleAxis: {
      max: 100,
      clockwise: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    polar: {
      center: ["50%", "25%"],
      radius: "110%", //图形大小
    },
    series: [
      {
        type: "bar",
        data: [
          {
            name: "出库进度",
            value: 65,
            itemStyle: {
              color: "#3d87fe"
            },
          },
        ],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 16,
        barGap: "-100%", // 两环重叠
        z: 2,
      },
      {
        type: "bar",
        data: [
          {
            value: 100,
            itemStyle: {
              color: "#dddddd"
            },
          },
        ],
        coordinateSystem: "polar",
        roundCap: true,
        barWidth: 16,
        barGap: "-100%", // 两环重叠
        z: 1,
      },
    ],
  };
  chartOptionPic3: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['定位异常', '待分配', '待拣货', '待复核', '待发货'],
      axisLabel: {
        inside: false,
        fontSize: '10'
      }
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '50%',
      height: 180,
      containLabel: true
    },
    series: [
      {
        data: [3900, 4500, 4500, 3700, 3700],
        type: 'bar',
        barWidth: '25%',
        itemStyle: {
          color: '#448afa'
        }
      }
    ]
  };
  ngOnInit(): void {
  }

}
