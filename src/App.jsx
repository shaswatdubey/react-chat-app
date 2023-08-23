import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSidebar from './Components/LeftSidebar';
import ChatWindow from './Components/ChatWindow';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<LeftSidebar/>,
      children: [
        {
          path: "/chat/:contactId",
          element: <ChatWindow />
        },
      ],
    },
  ]);

  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
