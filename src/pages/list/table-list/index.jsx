/* eslint-disable no-unused-vars */
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input, Drawer, Table, Progress } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProDescriptions from '@ant-design/pro-descriptions';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
import { genList } from './_mock';
import 'react-virtualized/styles.css';
// import {Column} from 'react-virtualized';

import style from './style.less';
// overflow: auto scroll;
// max-height: 300px
/**
 * 添加节点
 * @param fields
 */

const handleAdd = async (fields) => {
  const hide = message.loading('正在添加');

  try {
    await addRule({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async (fields) => {
  const hide = message.loading('正在配置', 10);

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */


const handleCollect = (content, duration) => {
  const hide = message.loading(content, duration);
}

const exportData = () => {
  const hide = message.loading('数据导出中', 10);
}

const TableList = () => {
  const actionRef = useRef();
  const [showTable, setShowTable] = useState(false);
  const [percent, setPercent] = useState(10);
  const columns = [
    {
      title: 'proto',
      dataIndex: 'proto',
      align: 'center',
    },
    {
      title: 'saddr',
      dataIndex: 'saddr',
      valueType: 'textarea',
      align: 'center',
    },
    {
      title: 'sport',
      dataIndex: 'sport',
      // sorter: true,
      hideInForm: true,
      align: 'center',
      // renderText: (val) => `${val} 万`,
    },
    {
      title: 'daddr',
      dataIndex: 'daddr',
      hideInForm: true,
      align: 'center',
    },
    {
      title: 'dport',
      dataIndex: 'dport',
      hideInForm: true,
      align: 'center',
    },
    {
      title: 'seq',
      dataIndex: 'seq',
      align: 'center',
    },
  ];
  return (
    <PageContainer>
      <div className={style.btnBox}>
        <Button type="primary" 
         disabled={showTable}
         onClick={() => {
          handleCollect('正在采集', 10);
          setShowTable(true)
          // setTimeout(() => {
          //   setPercent(10/)
          // }, 1000)
        }}>开始采集</Button>
        <Button type="primary" onClick={() => { handleCollect('停止采集',1)}}>停止采集</Button>
        <Button type="primary">流量信息</Button>
        <Button type="primary" onClick={() => {
          exportData()
        }}>数据导出</Button>
      </div>
      {/* <Progress
        className={style.progress} 
        percent={percent}   
        status="active" 
        format={ (per) => `采集进度${per}%`  }/> */}
      {showTable && (
        <Table
          scroll={{ x: 1200 }}
          pagination={false}
          actionRef={actionRef}
          rowKey="key"
          columns={columns}
          dataSource={genList()}
        />
      )}
    </PageContainer>
  );
};

export default TableList;
