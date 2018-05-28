import React from 'react'
import {Table} from 'antd'
import PhonesDetailsRow from './PhonesDetailsRow'


export default class RelativesDetailsRow extends React.Component {
  columns = [
    {
      title: 'Relative ID',
      dataIndex: 'data.Relative ID',
      key: 'relativeID',
      width: '25%',
    },
    {
      title: 'Patient ID',
      dataIndex: 'data.Patient ID',
      key: 'patientID',
      width: '25%',
    },
    {
      title: 'Is alive?',
      dataIndex: 'data.Is alive?',
      key: 'isAlive',
      width: '25%',
    },
    {
      title: 'Frequency of visit',
      dataIndex: 'data.Frequency of visits',
      key: 'frequencyOfVisit',
      width: '25%',
    },
  ]

  render() {
    return (
      <Table
          rowClassName={record => Object.keys(record.kids).length !== 0 ? '' : 'hide-expand-icon'}
          columns={this.columns}
          dataSource={this.props.records}
          expandedRowRender={record => {
            if (Object.keys(record.kids).length !== 0) {
              return <PhonesDetailsRow records={record.kids.has_phone.records}/>
            } else {
                return false
            }
          }}
          rowKey={record => {
            return record.data["Relative ID"]
            }
          }
      />
    )
  }
}
