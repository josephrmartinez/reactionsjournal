import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page"
import Account from './routes/account';
import Add from './routes/add';
import Concepts from './routes/concepts';
import Logs from './routes/logs';
import Insights from './routes/insights';

const router = createBrowserRouter([
  {
    path: "/reactionsjournal/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/reactionsjournal/account",
        element: <Account />,
      },
      {
        path: "/reactionsjournal/add",
        element: <Add />,
      },
      {
        element: <Concepts />,
        index: true
      },
      {
        path: "/reactionsjournal/insights",
        element: <Insights />,
      },
      {
        path: "/reactionsjournal/logs",
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
