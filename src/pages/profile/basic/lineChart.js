import React from 'react';

import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';

import {
  // CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers';

import './style.less';

export default class Curved extends React.Component {
  getOption = () => {
    // const dataSeries = [93, 93.2, 93.4, 93.6, 93.9, 94.2, 94.6, 94.8, 94.9, 94.6, 94.5];
    const { dataSeries, minYAxis, dataXAxis, colorEchart } = this.props;
    const option = {
      title: {
        show: true,
        text: 'Test Set',
        bottom: 0,
        left: 220,
        textStyle: {
          fontWeight: 'bold',
        },
        // textAlign: 'center',
      },
      grid: {
        show: true,
        top: 50,
        bottom: 50,
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataXAxis,
        axisLabel: {
          fontWeight: 600,
        },
        // splitLine: {
        //   lineStyle: {
        //     type: 'dashed',
        //     show: true,
        //   },
        // },
        axisTick: {
          show: true,
          alignWithLabel: true,
          // interval: 0,
          // length: 270,
          // inside: true,
          // lineStyle: {
          //   color: '#999'
          // }
        },
      },
      yAxis: {
        type: 'value',
        min: minYAxis,
        // max: maxYAxis,
        axisLine: {
          show: true,
        },
        axisLabel: {
          fontWeight: 600,
        },
        axisTick: {
          show: true,
        },
        splitLine: {
          interval: 0,
        },
      },
      series: [
        {
          data: dataSeries,
          type: 'line',
          symbol: 'triangle',
          symbolSize: 6,
          color: colorEchart,
        },
      ],
    };
    return option;
  };

  render() {
    echarts.use([SVGRenderer]);
    const { colorEchart } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <div className="left_text">Accuracy</div>
        <ReactECharts
          echarts={echarts}
          opts={{ renderer: 'svg' }}
          option={this.getOption()}
          style={{ height: 340, width: 550 }}
        />
        <div className="box">
          <div className={`tips ${colorEchart}`}>SVM</div>
          <div className="triangle"></div>
        </div>
      </div>
    );
  }
}
