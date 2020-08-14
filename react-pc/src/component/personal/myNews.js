import React, {Component} from 'react';

import { Table} from 'antd';
const columns = [
    {
        title: '全选',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
];
const data = [
    {
        name:"个人信息已修改"
    }
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};




class myNews extends Component {
    render() {
        return (
            <div>
                <Table
                    rowSelection={{
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                />
            </div>
        );
    };
}



export default myNews