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

        <Curved />
      </PageContainer>
    );
  }
}

export default connect(({ profileAndbasic, loading }) => ({
  profileAndbasic,
  loading: loading.effects['profileAndbasic/fetchBasic'],
}))(Basic);
