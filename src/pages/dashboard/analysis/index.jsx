import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { getTimeDistance } from './utils/utils';
import styles from './style.less';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import { data1 } from './_mock.js';

class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef = 0;

  timeoutId = 0;

  componentDidMount() {
    // const { dispatch } = this.props;
    // this.reqRef = requestAnimationFrame(() => {
    //   dispatch({
    //     type: 'dashboardAndanalysis/fetch',
    //   });
    // });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndanalysis/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = (rangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  selectDate = (type) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'dashboardAndanalysis/fetchSalesData',
    });
  };

  // isActive = (type) => {
  //   const { rangePickerValue } = this.state;

  //   if (!rangePickerValue) {
  //     return '';
  //   }

  //   const value = getTimeDistance(type);

  //   if (!value) {
  //     return '';
  //   }

  //   if (!rangePickerValue[0] || !rangePickerValue[1]) {
  //     return '';
  //   }

  //   if (
  //     rangePickerValue[0].isSame(value[0], 'day') &&
  //     rangePickerValue[1].isSame(value[1], 'day')
  //   ) {
  //     return styles.currentDate;
  //   }

  //   return '';
  // };

  render() {
    const cols = {
      value: {
        min: 0,
        range: [0, 0.93],
        alias: 'loss',
      },
      year: {
        range: [0, 0.9],
        alias: 'epoch',
      },
    };
    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={null}>
            <Chart height={400} data={data1} scale={cols}>
              <Legend />
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
                // position="top"
                crosshairs={{
                  type: 'y',
                }}
              />
              <Geom
                type="line"
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
                position="year*value"
                size={4}
                shape={'circle'}
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
          </Suspense>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))(Analysis);
