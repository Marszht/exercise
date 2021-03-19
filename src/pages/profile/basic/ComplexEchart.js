import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

export default class ComplexEchart extends Component {
  getOption = () => {
    const date = [0];

    const data = [1000];
    const data1 = [10000];
    const data2 = [10000];
    const data3 = [10000];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 301; i++) {
      date.push(i);
      data.push(
        Math.round((Math.random() - 0.5) * 4000 + data[i - 1]) >= 0
          ? Math.abs((Math.random() - 0.5) * 4000 + data[i - 1])
          : 0,
      );
      data1.push(
        Math.round((Math.random() - 0.5) * 4000 + data1[i - 1]) >= 0
          ? Math.abs((Math.random() - 0.5) * 4000 + data1[i - 1])
          : 0,
      );
      data2.push(
        Math.round((Math.random() - 0.5) * 4000 + data2[i - 1]) >= 0
          ? Math.abs((Math.random() - 0.5) * 4000 + data2[i - 1])
          : 0,
      );
      data3.push(
        Math.round((Math.random() - 0.5) * 4000 + data3[i - 1]) >= 0
          ? Math.abs((Math.random() - 0.5) * 4000 + data3[i - 1])
          : 0,
      );
    }
    const option = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        },
      },
      title: {
        left: 'center',
        bottom: 10,
        text: 'Time (Sec)',
        textStyle: {
          fontSize: '16',
        },
      },
      // legend: {
      //   show: true,
      //   data: [
      //     {
      //       icon: 'roundRect',
      //       name: 'SVM',
      //     },
      //     {
      //       icon: 'diamond',
      //       name: 'ANN',
      //     },
      //     {
      //       icon: 'triangle',
      //       name: 'CNN',
      //     },
      //     {
      //       icon: 'circle',
      //       name: 'SVM+CNN',
      //     },
      //   ],
      // },
      // toolbox: {
      //   feature: {
      //     dataZoom: {
      //       yAxisIndex: 'none',
      //     },
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        min: 0,
        axisLabel: {
          interval: (index) => {
            return [0, 1, 2, 3, 4, 5, 6].includes(index / 50);
          },
        },
        axisTick: {
          interval: (index) => {
            return [0, 1, 2, 3, 4, 5, 6].includes(index / 50);
          },
        },
      },
      yAxis: {
        type: 'value',
        name: 'Network stream attack',
        nameLocation: 'center',
        nameTextStyle: {
          padding: [0, 0, 30, 0],
          fontWeight: 'bold',
          fontSize: 16,
        },
        // max: 40000,
        axisTick: {
          show: true,
        },
        axisLine: {
          show: true,
        },
      },
      // dataZoom: [
      //   {
      //     type: 'inside',
      //     start: 0,
      //     end: 80,
      //   },
      //   {
      //     start: 0,
      //     end: 80,
      //   },
      // ],
      series: [
        {
          name: 'SVM',
          // type: 'scatter',
          type: 'line',
          // symbol(value, params) {
          // return 'roundRect';
          // return 'roundRect'
          // return params.dataIndex % 5 === 0 ? 'roundRect' : 'none'
          // console.log(params);
          // return  ? "emptyCircle" : 'none';
          // },
          symbolSize: 3,
          showAllSymbol: false,
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(228, 29, 29)',
          },
          data,
        },
        {
          name: 'CNN',
          // type: 'line',
          type: 'scatter',
          // symbol(value, params) {
          // return 'triangle';
          // return params.dataIndex % 5 === 0 ? 'triangle' : 'none'
          // },
          symbolSize: 6,
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(41, 168, 16)',
          },
          // data: data1,
        },
        {
          name: 'ANN',
          type: 'scatter',
          // symbol(value, params) {
          // return 'diamond';
          // return params.dataIndex % 5 === 0 ? 'diamond' : 'none'
          // },
          symbolSize: 6,
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(39, 84, 206)',
          },
          // data: data2,
        },
        {
          name: 'SVM+CNN',
          type: 'scatter',
          // symbol(value, params) {
          // return 'circle';
          // return params.dataIndex % 5 === 0 ? 'circle' : 'none'
          // },
          symbolSize: 6,
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(35, 4, 94)',
          },
          // data: data3,
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
          opts={{ renderer: 'svg' }}
          option={this.getOption()}
          style={{ height: 400, width: 800, paddingLeft: 50 }}
        />
      </div>
    );
  }
}
