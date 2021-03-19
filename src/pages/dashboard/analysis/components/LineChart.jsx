import React from 'react';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';
import styles from '../style.less';

const LineChart = ({ data, cols, color, time }) => {
  return (
    <div className={styles.lineBox}>
      <Chart height={400} data={data} scale={cols} renderer="svg">
        <Axis
          name="year"
          title={{
            position: 'end',
            offset: 15,
            textStyle: {
              fontSize: '12',
              textAlign: 'center',
              fill: '#999',
              fontWeight: 'bold',
              rotate: 0,
              autoRotate: true,
            },
          }}
        />
        <Axis
          name="value"
          line={{
            stroke: '#999',
            fill: '#999',
            lineWidth: 1,
          }}
          label={{
            rotate: 150,
          }}
          title={{
            position: 'end',
            offset: 5.5,
            textStyle: {
              fontSize: '12',
              textAlign: 'right',
              fill: '#999',
              fontWeight: 'bold',
              rotate: 0,
            },
          }}
        />
        <Tooltip
          crosshairs={{
            type: 'y',
          }}
        />
        <Geom
          type="line"
          color={color}
          position="year*value"
          size={2}
          tooltip={[
            'year*value',
            (year, value) => {
              return {
                name: '数值', // 要显示的名字
                value,
                title: year,
              };
            },
          ]}
        />
        <Geom
          type="point"
          color={color}
          position="year*value"
          size={4}
          shape={'triangle'}
          style={{
            stroke: '#fff',
            lineWidth: 1,
          }}
          tooltip={[
            'year*value',
            (year, value) => {
              return {
                name: '数值', // 要显示的名字
                value,
                title: year,
              };
            },
          ]}
        />
      </Chart>
      <div className={`${styles.tips} ${styles[color]}`}>{`time=${time}s`}</div>
      <div className={`${styles.triangle} ${styles[`${color}_tri`]}`}></div>
    </div>
  );
};

export default LineChart;
