import { Axis, Chart, Geom, Legend, Tooltip, Line, Point } from 'bizcharts';
import DataSet from '@antv/data-set';
import React from 'react';
import Slider from 'bizcharts-plugin-slider';
import autoHeight from '../autoHeight';
import styles from './index.less';

const TimelineChart = (props) => {
  const {
    title,
    height = 400,
    padding = [60, 20, 40, 40],
    titleMap = {
      y1: 'y1',
      y2: 'y2',
    },
    borderWidth = 2,
    data: sourceData,
  } = props;
  const data = [
    {
      year: "1991",
      value: 3,
    },
    {
      year: "1992",
      value: 4,
    },
    {
      year: "1993",
      value: 3.5,
    },
    {
      year: "1994",
      value: 5,
    },
    {
      year: "1995",
      value: 4.9,
    },
    {
      year: "1996",
      value: 6,
    },
    {
      year: "1997",
      value: 7,
    },
    {
      year: "1998",
      value: 9,
    },
    {
      year: "1999",
      value: 13,
    },
  ]
  // const data = Array.isArray(sourceData)
  //   ? sourceData
  //   : [
  //       {
  //         x: 0,
  //         y1: 0,
  //         y2: 0,
  //       },
  //     ];
  // data.sort((a, b) => a.x - b.x);
  // let max;

  // if (data[0] && data[0].y1 && data[0].y2) {
  //   max = Math.max(
  //     [...data].sort((a, b) => b.y1 - a.y1)[0].y1,
  //     [...data].sort((a, b) => b.y2 - a.y2)[0].y2,
  //   );
  // }

  // const ds = new DataSet({
  //   state: {
  //     start: data[0].x,
  //     end: data[data.length - 1].x,
  //   },
  // });
  // const dv = ds.createView();
  // dv.source(data)
  //   .transform({
  //     type: 'filter',
  //     callback: (obj) => {
  //       const date = obj.x;
  //       return date <= ds.state.end && date >= ds.state.start;
  //     },
  //   })
  //   .transform({
  //     type: 'map',

  //     callback(row) {
  //       const newRow = { ...row };
  //       newRow[titleMap.y1] = row.y1;
  //       newRow[titleMap.y2] = row.y2;
  //       return newRow;
  //     },
  //   })
  //   .transform({
  //     type: 'fold',
  //     fields: [titleMap.y1, titleMap.y2],
  //     // 展开字段集
  //     key: 'key',
  //     // key字段
  //     value: 'value', // value字段
  //   });
  // const timeScale = {
  //   type: 'time',
  //   tickInterval: 60 * 60 * 1000,
  //   mask: 'HH:mm',
  //   range: [0, 1],
  // };
  // const cols = {
  //   x: timeScale,
  //   value: {
  //     max,
  //     min: 0,
  //   },
  // };

  // const SliderGen = () => (
  //   <Slider
  //     padding={[0, padding[1] + 20, 0, padding[3]]}
  //     width="auto"
  //     height={26}
  //     xAxis="x"
  //     yAxis="y1"
  //     scales={{
  //       x: timeScale,
  //     }}
  //     data={data}
  //     start={ds.state.start}
  //     end={ds.state.end}
  //     backgroundChart={{
  //       type: 'line',
  //     }}
  //     onChange={({ startValue, endValue }) => {
  //       ds.setState('start', startValue);
  //       ds.setState('end', endValue);
  //     }}
  //   />
  // );

  return (
    
    <Chart
    appendPadding={[10, 0, 0, 10]}
    autoFit
    height={500}
    data={data}
    scale={{ value: { min: 0, alias: '人均年收入' }, year: { range: [0, 1] } }}
  >

    <Line position="year*value" />
    <Point position="year*value" />
    <Tooltip showCrosshairs />
  </Chart>
    // <div
    //   className={styles.timelineChart}
    //   style={{
    //     height: height + 30,
    //   }}
    // >
    //   <div>
    //     {title && <h4>{title}</h4>}
    //     <Chart height={height} padding={padding} data={dv} scale={cols} forceFit>
    //       <Axis name="x" />
    //       <Tooltip />
    //       <Legend name="key" position="top" />
    //       <Geom type="line" position="x*value" size={borderWidth} color="key" />
    //     </Chart>
    //     <div
    //       style={{
    //         marginRight: -20,
    //       }}
    //     >
    //       <SliderGen />
    //     </div>
    //   </div>
    // </div>
  );
};

export default autoHeight()(TimelineChart);
