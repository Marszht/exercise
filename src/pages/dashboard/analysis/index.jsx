/* eslint-disable no-unused-vars */
import React, { Component, Suspense } from 'react';
import { GridContent, PageContainer } from '@ant-design/pro-layout';
import { Button, Checkbox, Form, Row, Col, Progress, message } from 'antd';
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
    extractFlag: false
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

  componentWillUnmount() {}

  startExtract = () => {
    const hide = message.loading('正在提取...');
    this.setState({
      extractFlag: true
    })
    setTimeout(() => {
      this.setState({
        extractFlag: false,
        // percent: 100
      })
    }, 3000)
  };

  render() {
    const { extractFlag } = this.state;
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
    const formLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 14 },
    };
    return (
      <PageContainer>
        <GridContent>
          <React.Fragment>
            <div className={styles.btnBox}>
              <Button
                className={styles.importBtn}
                type="primary"
                onClick={() => {
                  // handleCollect('正在采集', 10);
                  // setShowTable(true);
                }}
              >
                数据导入
              </Button>

              <Button
                disabled={extractFlag}
                className={styles.importBtn}
                type="primary"
                onClick={this.startExtract}
              >
                开始特征值提取
              </Button>
              <Button className={styles.importBtn} type="primary">
                特征融合
              </Button>
            </div>
            <Progress
              className={styles.progress}
              percent={20}
              status="active"
              format={(per) => `特征值提取进度${per}%`}
            />
            <Form>
              <Form.Item label="特征值选择" name="layout" style={{ marginLeft: 120 }}>
                <Checkbox.Group style={{ width: '100%' }}>
                  <Row gutter={[24, 16]} style={{ marginBottom: 20 }}>
                    <Col span={4}>
                      <Checkbox value={'NP'}>NP</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NSP'}>NSP</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NDP'}>NDP</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NSIP'}>NSIP</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NDIP'}>NDIP</Checkbox>
                    </Col>
                  </Row>
                  <Row gutter={[24, 16]} style={{ marginBottom: 20 }}>
                    <Col span={4}>
                      <Checkbox value={'NU'}>NU</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NT'}>NT</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NI'}>NI</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'NPS'}>NPS</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value={'STATE'}>STATE</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
            {/* <Suspense fallback={null}>
              <LineChart data={data1} cols={cols} color={'green'} time="0.01" />
              <LineChart data={data2} cols={cols} color={'red'} time="0.1" />
              <LineChart data={data3} cols={cols} color={'yellow'} time="0.05" />
              <LineChart data={data4} cols={cols} color={'blue'} time="0.5" />
              <LineChart data={data5} cols={cols} color={'black'} time="1" />
            </Suspense> */}
          </React.Fragment>
        </GridContent>
      </PageContainer>
    );
  }
}

export default connect(({ dashboardAndanalysis, loading }) => ({
  dashboardAndanalysis,
  loading: loading.effects['dashboardAndanalysis/fetch'],
}))(Analysis);
