import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Index from './components/Index/Index'

//checks the browser if anything is after the / in the browser and does routing accordingly
// const router = createBrowserRouter([
//   {
//     //if path is / nothing then it will load the Layout page
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         //if theres nothing then homepage is loaded
//         path:"",
//         element: <Index.Home />
//       },
//       //if there is /about then this will be loaded
//       {
//         path:"about",
//         element:<Index.About />
//       },
//       {
//         path:"/contact",
//         element:<Index.Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Index.Home />} />
      <Route path='about' element={<Index.About />} />
      <Route path='contact' element={<Index.Contact />} />
      <Route path='user/:userid' element={<Index.User />} />
      <Route 
        loader={Index.githubInfoLoader}
        path='github' 
        element={<Index.Github />} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
