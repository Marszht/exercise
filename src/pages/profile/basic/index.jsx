import { Button, Radio, Form, Modal } from 'antd';
import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect } from 'umi';
import styles from './style.less';

import LineChart from '../../dashboard/analysis/components/LineChart';
import Curved from './lineChart';
import { data1, data2, data3, data4, data5 } from '../../dashboard/analysis/_mock';

class Basic extends Component {
  state = {
    isDisabled: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profileAndbasic/fetchBasic',
    });
  }

  openCheckModal = () => {
    Modal.warning({
      content: '检测到DDOs攻击！！！',
    });
    this.setState({
      isDisabled: true,
    });
    setTimeout(() => {
      this.setState({
        isDisabled: false,
      });
    }, 30000);
  };

  render() {
    const formLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };
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
      <PageContainer>
        <div className={styles.btnBox}>
          <Form style={{ width: 300 }}>
            <Form.Item label="模型选择" {...formLayout}>
              <Radio.Group value="SVM">
                <Radio value="SVM" style={{ marginBottom: 10 }}>
                  Support Vector Machine
                </Radio>
                <Radio value="CNM">Convolutional Neural Networks</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
          <Button
            disabled={this.state.isDisabled}
            className={styles.importBtn}
            type="primary"
            onClick={this.openCheckModal}
          >
            开始检测
          </Button>
          <Button
            // disabled={this.state.isDisabled}
            className={styles.importBtn}
            type="primary"
            onClick={this.openCheckModal}
          >
            停止检测
          </Button>
        </div>
        {this.state.isDisabled && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <LineChart data={data1} cols={cols} color={'green'} time="0.01" />
            <LineChart data={data2} cols={cols} color={'red'} time="0.05" />
            <LineChart data={data3} cols={cols} color={'yellow'} time="0.05" />
            <LineChart data={data4} cols={cols} color={'blue'} time="0.5" />
            <LineChart data={data5} cols={cols} color={'black'} time="1" />
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Curved
            dataSeries={[93, 93.2, 93.4, 93.6, 93.9, 94.2, 94.6, 94.8, 94.9, 94.6, 94.5]}
            minYAxis="92"
            maxYAxis="96"
            dataXAxis={[2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]}
            colorEchart="green"
          />
          <Curved
            dataSeries={[
              '91.21',
              '91.89',
              '92.32',
              '92.66',
              '92.97',
              '94.38',
              '95.00',
              '95.20',
              '95.01',
              '94.70',
              '94.36',
            ]}
            minYAxis="91"
            maxYAxis="96"
            dataXAxis={[3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000]}
            colorEchart="blue"
          />
          <Curved
            dataSeries={[
              '94.00',
              '94.22',
              '94.39',
              '94.67',
              '94.58',
              '94.78',
              '94.90',
              '95.20',
              '95.43',
              '94.70',
              '94.36',
            ]}
            minYAxis="94"
            maxYAxis="97"
            dataXAxis={[4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000]}
            colorEchart="red"
          />
          <Curved
            dataSeries={[
              '95.00',
              '95.22',
              '95.39',
              '95.67',
              '95.58',
              '95.78',
              '95.90',
              '96.20',
              '96.43',
              '96.70',
              '96.36',
            ]}
            minYAxis="92"
            maxYAxis="100"
            dataXAxis={[5000, 5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000]}
            colorEchart="black"
          />
        </div>
      </PageContainer>
    );
  }
}

export default connect(({ profileAndbasic, loading }) => ({
  profileAndbasic,
  loading: loading.effects['profileAndbasic/fetchBasic'],
}))(Basic);
