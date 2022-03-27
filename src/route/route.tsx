import List from '../pages/productManage/List'
import PriceConfig from '../pages/productConfig/priceConfig'
import ProductConfig from '../pages/productConfig/productConfig'
import { SettingOutlined, SaveOutlined } from '@ant-design/icons'
export const routes = [
  { path: '/list', element: <List /> },
  { path: '/price', element: <PriceConfig /> },
  { path: '/product', element: <ProductConfig /> },
]

export const menuRoute = [
  {
    title: '商品管理',
    key: 'menu1',
    icon: <SaveOutlined />,
    subMenu: [
      {
        title: '商品列表',
        path: '/list',
        element: <List />,
      },
    ],
  },
  {
    title: '配置管理',
    key: 'menu2',
    icon: <SettingOutlined />,
    subMenu: [
      {
        title: '商品价格',
        path: '/price',
        element: <PriceConfig />,
      },
      {
        title: '商品管理',
        path: '/product',
        element: <ProductConfig />,
      },
    ],
  },
]
