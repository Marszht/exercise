import React from 'react';

import ReactECharts from 'echarts-for-react';

import './style.less';

const data = [
  {
    month: '2800',
    city: 'SVM',
    temperature: 92.1,
  },
  {
    month: '2800',
    city: 'SVM-RS',
    temperature: 93.1,
  },
  {
    month: '2900',
    city: 'SVM',
    temperature: 93.1,
  },
  {
    month: '2900',
    city: 'SVM-RS',
    temperature: 96.3,
  },
  {
    month: '3000',
    city: 'SVM',
    temperature: 93.7,
  },
  {
    month: '3000',
    city: 'SVM-RS',
    temperature: 96.3,
  },
  {
    month: '3100',
    city: 'SVM',
    temperature: 93.9,
  },
  {
    month: '3100',
    city: 'SVM-RS',
    temperature: 93.1,
  },
  {
    month: '3200',
    city: 'SVM',
    temperature: 97.1,
  },
  {
    month: '3200',
    city: 'SVM-RS',
    temperature: 96.5,
  },
  {
    month: '3300',
    city: 'SVM',
    temperature: 97.2,
  },
  {
    month: '3300',
    city: 'SVM-RS',
    temperature: 96.5,
  },
  {
    month: '3400',
    city: 'SVM',
    temperature: 97.2,
  },
  {
    month: '3400',
    city: 'SVM-RS',
    temperature: 96.6,
  },
  {
    month: '3500',
    city: 'SVM',
    temperature: 97.4,
  },
  {
    month: '3500',
    city: 'SVM-RS',
    temperature: 96.6,
  },
  {
    month: '3600',
    city: 'SVM',
    temperature: 97.8,
  },
  {
    month: '3600',
    city: 'SVM-RS',
    temperature: 96.6,
  },
  {
    month: '3700',
    city: 'SVM',
    temperature: 97.7,
  },
  {
    month: '3700',
    city: 'SVM-RS',
    temperature: 96.6,
  },
  {
    month: '3800',
    city: 'SVM',
    temperature: 98.5,
  },
  {
    month: '3800',
    city: 'SVM-RS',
    temperature: 96.9,
  },
];

export default class Curved extends React.Component {
  getOption = () => {
    const dataSeries = [];
    data
      .filter((item) => item.city === 'SVM')
      .forEach((item) => {
        dataSeries.push(item.temperature);
      });
    const option = {
      title: {
        show: true,
        text: 'Sample in training set',
        bottom: 10,
        left: 150,
        // textAlign: 'center',
      },
      grid: {
        show: true,
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['2800', '2900', '3000', '3100', '3200', '3300', '3400', '3500', 3600, 3700, 3800],
        axisLabel: {
          align: 'right',
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            show: true,
          },
        },
        // axisTick: {
        //   show: true,
        //   interval: 0,
        //   length: 270,
        //   inside: true,
        //   lineStyle: {
        //     color: '#999'
        //   }
        // },
      },
      yAxis: {
        type: 'value',
        min: 94,
        max: 100,
        axisLine: {
          show: true,
        },
        axisTick: {
          show: true,
        },
      },
      series: [
        {
          data: dataSeries,
          type: 'line',
          symbol: 'triangle',
          symbolSize: 6,
        },
      ],
    };
    return option;
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div className="left_text">Accuracy</div>
        <ReactECharts option={this.getOption()} style={{ height: 400, width: 600 }} />
        <div className="box">
          <div className="tips">SVM-RS</div>
          <div className="triangle"></div>
        </div>
      </div>
    );
  }
}
