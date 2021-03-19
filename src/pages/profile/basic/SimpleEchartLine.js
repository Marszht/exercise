import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

import {
  // CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers';

export default class SimpleEchartLine extends Component {
  getOption = () => {
    const { SimpleData } = this.props;
    const { yAxisMax, yAxisMin, name, splitNumber } = SimpleData;
    const option = {
      title: {
        left: 'center',
        bottom: 0,
        text: 'Time/s',
        textStyle: {
          fontSize: '14',
        },
      },
      // tooltip: {
      //   trigger: 'axis',
      // },
      // SVM,C4.5,ours,Bayes
      legend: {
        top: '6%',
        textStyle: {
          color: 'rgba(0, 0, 0, 0.85)',
        },
        data: [
          {
            icon: 'roundRect',
            name: 'SVM',
          },
          {
            icon: 'diamond',
            name: 'C4.5',
          },
          {
            icon: 'triangle',
            name: 'Ours',
          },
          {
            icon: 'circle',
            name: 'Bayes',
          },
        ],
      },
      grid: {
        // left: '10%',
        // right: '4%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1],
        // axisLine: {
        //   show: false,
        // },
        // axisTick: {
        //   show: false,
        // },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.85)',
        },
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {
      //       type: 'svg'
      //     },
      //   },
      // },
      yAxis: {
        type: 'value',
        name,
        nameLocation: 'center',
        max: yAxisMax,
        splitNumber,
        min: yAxisMin,
        nameGap: 35,
        nameTextStyle: {
          fontSize: 14,
          fontWeight: 600,
          color: 'rgba(0, 0, 0, 0.85)',
        },
        axisTick: {
          interval: 1,
          show: true,
        },
        axisLine: {
          show: true,
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.85)',
        },
      },
      series: [
        {
          name: 'SVM',
          type: 'line',
          symbol: 'roundRect',
          symbolSize: 10,
          // stack: '总量',
          data: SimpleData.SVM.data,
        },
        {
          name: 'C4.5',
          type: 'line',
          symbol: 'diamond',
          symbolSize: 10,
          // stack: '总量',
          data: SimpleData['AS-CNN'].data,
        },
        {
          name: 'Bayes',
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          // stack: '总量',
          data: SimpleData['CS-CNN'].data,
        },
        {
          name: 'Ours',
          type: 'line',
          symbol: 'triangle',
          symbolSize: 10,
          // stack: '总量',
          data: SimpleData['SS-CNN'].data,
        },
      ],
    };
    return option;
  };

  render() {
    echarts.use([SVGRenderer]);
    return (
      <div>
        <ReactECharts
          echarts={echarts}
          option={this.getOption()}
          style={{ height: 400, width: 600 }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    );
  }
}
