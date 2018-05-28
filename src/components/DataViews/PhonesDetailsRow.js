import React from 'react'
import {Table} from 'antd'


export default class PhonesDetailsRow extends React.Component {
  columns = [
    {
      title: 'Phone ID',
      dataIndex: 'data.Phone ID',
      key: 'phoneID',
      width: '33%',
    },
    {
      title: 'ID of the relative',
      dataIndex: 'data.ID of the relative',
      key: 'IDOfRelative',
      width: '33%',
    },
    {
      title: 'Phone',
      dataIndex: 'data.Phone',
      key: 'phone',
      width: '33%',
    },
  ]

  render() {
    return (
      <Table
          rowKey={record => {
            return record.data["Phone ID"]
            }
          }
          columns={this.columns}
          dataSource={this.props.records}
      />
    )
  }
}
