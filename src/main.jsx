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
import Reactions from './routes/reactions';
import Responses from './routes/responses';


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
        path: "/reactionsjournal/concepts",
        children: [
          {
            path: "/reactionsjournal/concepts/reactions",
            element: <Reactions />
          },
          {
            path: "/reactionsjournal/concepts/responses",
            element: <Responses />
          },   
        ]
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
