import { Layout, Menu } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
import { menuRoute } from '../../route/route'
import { useNavigate } from 'react-router-dom'
function Frame(props) {
  const to = useNavigate()
  return (
    <Layout>
      <Header className="header">
        <h1 style={{ color: 'white' }}>后台管理系统</h1>
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            {menuRoute.map((route) => {
              return (
                <SubMenu key={route.key} icon={route.icon} title={route.title}>
                  {route.subMenu.map((menuChild) => {
                    return (
                      <Menu.Item
                        key={menuChild.path}
                        onClick={() => {
                          to(menuChild.path)
                        }}>
                        {menuChild.title}
                      </Menu.Item>
                    )
                  })}
                </SubMenu>
              )
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Frame
