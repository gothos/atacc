import React from 'react'
import RelativesDetailsRow from './RelativesDetailsRow'
import {connect} from "react-redux";
import * as recordAction from "../../modules/records/actions";
import {Button, Popconfirm, Table} from 'antd'


class ItemsView extends React.Component {
  columns = [
    {
      title: 'Identification number',
      dataIndex: 'data.Identification number',
      key: 'identificationNumber',
      width: '10%',
    },
    {
      title: 'Name',
      dataIndex: 'data.Name',
      key: 'name',
      width: '10%',
    },
    {
      title: 'Gender',

      dataIndex: 'data.Gender',
      key: 'gender',
      width: '10%',
    },
    {
      title: 'Risk',

      dataIndex: 'data.Risk',
      key: 'risk',
      width: '10%',
    },
    {
      title: 'Hair length',

      dataIndex: 'data.Hair length',
      key: 'hairLength',
      width: '10%',
    },
    {
      title: 'IQ',

      dataIndex: 'data.IQ',
      key: 'iq',
      width: '10%',
    },
    {
      title: 'Admission date',

      dataIndex: 'data.Admission date',
      key: 'admissionDate',
      width: '10%',
    },
    {
      title: 'Last breakdown',

      dataIndex: 'data.Last breakdown',
      key: 'lastBreakdown',
      width: '10%',
    },
    {
      title: 'Yearly fee',

      dataIndex: 'data.Yearly fee',
      key: 'yearlyFee',
      width: '10%',
    },
    {
      title: 'Knows the Joker?',
      dataIndex: 'data.Knows the Joker?',
      key: 'knowsTheJoker',
      width: '10%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Popconfirm
            title="Are you sure about deleting this record?"
            onConfirm={() => this.removeRecord(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" size="small">
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    }
  ]
  removeRecord = record => {
    this.props.removeRecord(record.data["Identification number"])
  }
  render() {
    return (
      <Table
        rowClassName={record => Object.keys(record.kids).length !== 0 ? '' : 'hide-expand-icon'}
        columns={this.columns}
        expandedRowRender={record => {
          if (Object.keys(record.kids).length !== 0) {
            return <RelativesDetailsRow records={record.kids.has_relatives.records}/>
          }
        }}
        dataSource={this.props.records}
        rowKey={record => {
          return record.data["Identification number"]
          }
        }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    records: state.records.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeRecord: id => {
    dispatch(recordAction.removeRecord(id))
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsView)
