import './App.css'
import { Routes, Route } from 'react-router-dom'
import { routes, menuRoute } from './route/route'
import Frame from './components/Frame/Frame'
import 'antd/dist/antd.css'
function App() {
  return (
    <Frame>
      <div className="App">
        <Routes>
          {menuRoute.map((menuRoute) => {
            return menuRoute.subMenu.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}></Route>
              )
            })
          })}
        </Routes>
      </div>
    </Frame>
  )
}

export default App
