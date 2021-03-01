import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message, Input, Drawer, Table } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProDescriptions from '@ant-design/pro-descriptions';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
import { genList } from './_mock';

import  './style.less';
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
  const hide = message.loading('正在配置');

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

const handleRemove = async (selectedRows) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList = () => {
  console.log(genList());
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const [row, setRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
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
    // {
    //   title: 'stddev',
    //   dataIndex: 'stddev',
    //   hideInForm: true,
    // },
    // {
    //   title: '操作',
    //   dataIndex: 'option',
    //   valueType: 'option',
    //   render: (_, record) => (
    //     <>
    //       <a
    //         onClick={() => {
    //           handleUpdateModalVisible(true);
    //           setStepFormValues(record);
    //         }}
    //       >
    //         配置
    //       </a>
    //       <Divider type="vertical" />
    //       <a href="">订阅警报</a>
    //     </>
    //   ),
    // },
  ];
  return (
    <PageContainer>
      <Table
        scroll={{ x: 1100 }}
        pagination={false}
        actionRef={actionRef}
        rowKey="key"
        columns={columns}
        dataSource={genList()}
      />
    </PageContainer>
  );
};

export default TableList;
