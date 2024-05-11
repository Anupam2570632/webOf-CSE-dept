import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Academic from './Pages/Academic/Academic';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Notice from './Components/Navbar/Notice/Notice';
import NoticeDetails from './Pages/NoticeDetails/NoticeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/academic',
        loader: () => fetch('/programs.json'),
        element: <Academic />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/notice',
        element: <Notice />
      },
      {
        path: '/noticeDetails/:id',
        element: <NoticeDetails />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
