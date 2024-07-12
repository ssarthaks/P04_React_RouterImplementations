import Index from './components/Index/Index'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Index.Header />
      <Outlet />
      <Index.Footer />
    </>
  )
}

export default Layout
