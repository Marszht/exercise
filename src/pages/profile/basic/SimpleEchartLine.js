import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

export default class SimpleEchartLine extends Component {
  getOption = () => {
    const { SimpleData } = this.props;
    const { yAxisMax, yAxisMin, name, splitNumber } = SimpleData;
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
      // SVM,C4.5,ours,Bayes
      legend: {
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
            name: 'ours',
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
        // bottom: '3%',
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
        // axisLabel: {
        //   show: false,
        // },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      yAxis: {
        type: 'value',
        name,
        nameLocation: 'center',
        max: yAxisMax,
        splitNumber,
        min: yAxisMin,
        nameTextStyle: {
          padding: [0, 0, 20, 0],
          fontSize: 16,
        },
        axisTick: {
          interval: 1,
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
          name: 'ours',
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
