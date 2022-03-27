import { Button, Card } from 'antd'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { getList, login } from '../../service/productService'
function List() {
  const [data1, setData] = useState()
  useEffect(() => {
    getList().then((res) => {
      console.log(res)
    })
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
          <Button type="primary">新增</Button>
          <Button type="primary" danger style={{ margin: '0 0.9rem' }}>
            删除
          </Button>
        </div>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  function loginClick() {
    const params = {
      username: '123',
      password: '123',
    }
    login(params).then((res) => {
      console.log(res)
    })
  }

  return (
    <Card
      title="列表页"
      extra={
        <Button type="primary" onClick={loginClick}>
          登录
        </Button>
      }
      style={{ width: '100%' }}>
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default List
