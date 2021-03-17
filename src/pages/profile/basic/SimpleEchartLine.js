import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

// import { SimpleData } from './model';

export default class SimpleEchartLine extends Component {
  getOption = () => {
    const option = {
      title: {
        left: 'center',
        bottom: 10,
        text: '采集时间间隔/s',
        textStyle: {
          fontSize: '16',
        },
      },
      // tooltip: {
      //   trigger: 'axis',
      // },
      legend: {
        data: [
          {
            icon: 'roundRect',
            name: 'SVM',
          },
          {
            icon: 'diamond',
            name: 'AS-CNN',
          },
          {
            icon: 'triangle',
            name: 'CS-CNN',
          },
          {
            icon: 'circle',
            name: 'SS-CNN',
          },
        ],
      },
      // grid: {
      //   left: '10%',
      //   // right: '4%',
      //   // bottom: '3%',
      //   containLabel: true,
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
      },
      yAxis: {
        type: 'value',
        name: 'FR',
        nameLocation: 'center',
        max: 0.1,
        min: 0.01,
        nameTextStyle: {
          padding: [0, 0, 30, 0],
          fontSize: 16,
        },
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          name: 'SVM',
          type: 'line',
          // stack: '总量',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'AS-CNN',
          type: 'line',
          // stack: '总量',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'CS-CNN',
          type: 'line',
          // stack: '总量',
          data: [0.002, 0, 0, 0, 0, 0, 0.004, 0, 0],
        },
        {
          name: 'SS-CNN',
          type: 'line',
          // stack: '总量',
          data: [0.009, 0.01, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <div>
        <ReactECharts
          echarts={echarts}
          option={this.getOption()}
          style={{ height: 400, width: 600 }}
        />
      </div>
    );
  }
}
