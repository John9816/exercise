import { Button, Card } from 'antd'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { getUserContext, login } from '../../service/productService'
function List() {
  const [data, setData] = useState()
  useEffect(() => {
    const params = {
      account: '17716471146',
    }
    getUserContext(params).then((res) => {
      let result = [0]
      result[0] = res.data
      console.log(result)
      setData(result)
    })
  }, [])

  const columns = [
    {
      title: '昵称',
      dataIndex: 'nickName',
      key: 'nickName',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },

    {
      title: '操作',
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
