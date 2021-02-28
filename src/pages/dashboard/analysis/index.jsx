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
import LineChart from './components/LineChart';
import { data1, data2, data3, data4, data5 } from './_mock.js';

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
            <LineChart data={data1} cols={cols} color={'green'} time="0.01"/>
            <LineChart data={data2} cols={cols} color={'red'} time="0.1"/>
            <LineChart data={data3} cols={cols} color={'yellow'} time="0.05"/>
            <LineChart data={data4} cols={cols} color={'blue'} time="0.5"/>
            <LineChart data={data5} cols={cols} color={'black'} time="1"/>
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
