import { DingdingOutlined } from '@ant-design/icons';
import { Button, Steps, Card, message, Modal } from 'antd';
import { FormattedMessage } from 'umi';
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';

const confirrmModal = () => {
  Modal.confirm({
    content: '确定要丢弃数据包'
  })
}
export default () => {
  const [showCard, setShowCard] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);
  return (
    <PageContainer>
      <div className={styles.btnBox}>
        <Button
          type="primary"
          disabled={btnDisable}
          className={styles.importBtn}
          onClick={async () => {
            setBtnDisable(true);
            setShowCard(true);
            await message.loading('数据获取中...', 10);
            setBtnDisable(false);
          }}
        >
          获取恶意流头域信息
        </Button>
        <Button
          className={styles.importBtn}
          type="primary"
          //  disabled={showTable}
          onClick={() => {
            // handleCollect('正在采集', 10);
            // setShowTable(true)
            // setTimeout(() => {
            //   setPercent(10/)
            // }, 1000)
          }}
        >
          限制恶意流匹配数据包
        </Button>
        <Button
          className={styles.importBtn}
          type="primary"
          onClick={() => {
            confirrmModal()
            // handleCollect('停止采集', 1);
          }}
        >
          丢弃数据包
        </Button>
      </div>
      {showCard && (
        <Card className={styles.cardBox}>
          <p>
            2118009 tcp 192.168.100.148 42142 192.168.100.3 80 204615 0.428798 56 3.271411 1
            3.626428 100 0 0.343654 4.2297 1 DDoS TCP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
          <p>
            303688 tcp 192.168.100.149 1645 192.168.100.5 80 40058 2.058381 100 0 3 1.188407 100 0
            0.135842 4.753628 1 DoS TCP
          </p>
          <p>
            420025 tcp 192.168.100.149 39733 192.168.100.5 80 156396 2.177835 36 0 3 1.539962 36 0
            0.127912 4.619887 1 DoS TCP
          </p>
          <p>
            3008812 udp 192.168.100.147 10800 192.168.100.3 80 118034 1.368196 100 1.97518 4
            3.910081 100 0 1.02512 4.885159 1 DDoS UDP
          </p>
          <p>
            332527 tcp 192.168.100.149 15302 192.168.100.5 80 68897 0.018936 100 0 1 0.010933 100 0
            0.094236 0.043731 1 DoS TCP
          </p>
          <p>
            3059537 udp 192.168.100.148 24105 192.168.100.3 80 168759 0.639122 100 2.750087 4
            3.653935 100 0 0.729595 4.108791 1 DDoS UDP
          </p>
          <p>
            2584850 tcp 192.168.100.147 37713 192.168.100.3 80 147163 0.113154 96 0 3 0.065329 100 0
            0.092369 0.261317 1 DDoS TCP
          </p>
          <p>
            1248768 udp 192.168.100.148 40557 192.168.100.6 80 107179 2.04688 100 0 4 1.669863 100 0
            0.190064 4.307466 1 DoS UDP
          </p>
        </Card>
      )}
    </PageContainer>
  );
};
