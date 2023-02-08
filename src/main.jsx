import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page"
import Account from './routes/Account';
import Add from './routes/Add';
import Concepts from './routes/Concepts';
import Logs from './routes/Logs';
import Insights from './routes/Insights';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/concepts",
        element: <Concepts />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
      {
        path: "/logs",
        element: <Logs />,
      },
    ],
  },
]);


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
;
